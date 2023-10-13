'use strict';
import races from './js/races.js';
import stones from "./js/stones.js";
import * as change_stats_funcs from './js/change_stats_funcs.js'
import * as lp_calc_funcs from './js/lp_calc_funcs.js';
import {chosen_stone} from "./js/chosen_stone.js";


// константы для экспы
const FiE_GV_IncreaseCostEvery = 25;
const FiE_GV_CostLPMult = 1;
const FiE_GV_CostGoldMult = 60;

//кнопка Расчитать
let result = document.getElementById('result');

let allGoldTable = document.getElementById('allGoldTable');
export let allLPTable = document.getElementById('allLPTable');

// выбранный камень для отображения в модалке расчета
export let chosenStone = document.getElementById('chosenStone');

// лп за перки
let perks_lp_cost;
// голды за перки
let perks_gold_cost;



// формула расчета лп
function GetGCostFor(skillValue) {
    return (Math.ceil(skillValue / FiE_GV_IncreaseCostEvery)) * FiE_GV_CostGoldMult;
}

function GetLPCostFor(skillValue) {
    return (Math.ceil(skillValue / FiE_GV_IncreaseCostEvery)) * FiE_GV_CostLPMult;
}

function CalculateGCost(currentSkillValue, countValue) {
    let cost = 0;
    let index = currentSkillValue;
    while (index < currentSkillValue + countValue) {
        index += 1;
        cost += GetGCostFor(index);
    }
    return cost;
}

function CalculateLPCost(currentSkillValue, countValue) {
    let cost = 0;
    let index = currentSkillValue;
    while (index < currentSkillValue + countValue) {
        index += 1
        cost += GetLPCostFor(index)
    }
    return cost;
}

function calculatePerksCost(numPerks) {
    if (numPerks < 1) {
        return console.log("Неверное количество перков!");
    }

    const goldCost = 600 + 200 * (numPerks - 1);
    let totalGold = 0;
    let totalLP = 5;
    totalLP += (numPerks - 1) * 5;

    for (let i = 600; i <= goldCost; i += 200) {
        totalGold += i;
    }

    return {"gold": totalGold, "LP": totalLP};
}

function calculate() {
    let numPerksInput = document.getElementById("numPerks");
    let numPerks = parseInt(numPerksInput.value, 10);
    let perkCosts = 0;
    if (numPerksInput.value === "0") {
        // perkCosts = calculatePerksCost(numPerks);
        perks_gold_cost = 0;
        perks_lp_cost = 0
    } else if (!isNaN(numPerks)) {
        perkCosts = calculatePerksCost(numPerks);
        perks_gold_cost = perkCosts.gold;
        perks_lp_cost = perkCosts.LP;
    } else {
        return console.log('error');
    }
}


// расчет всех ячеек с лп с таблицы
function getAllLPFromTable() {
    allGoldTable.innerHTML =
        Number(stones.needGoldBlacksmith.innerHTML)
        + Number(stones.needGoldHeavyArmor.innerHTML)
        + Number(stones.needGoldTwoHandedWeapon.innerHTML)
        + Number(stones.needGoldOneHandedWeapon.innerHTML)
        + Number(stones.needGoldShooting.innerHTML)
        + Number(stones.needGoldBlocking.innerHTML)

        + Number(stones.needGoldEvasion.innerHTML)
        + Number(stones.needGoldStealth.innerHTML)
        + Number(stones.needGoldBreaking.innerHTML)
        + Number(stones.needGoldPickpocketing.innerHTML)
        + Number(stones.needGoldSpeech.innerHTML)
        + Number(stones.needGoldAlchemy.innerHTML)

        + Number(stones.needGoldDestruction.innerHTML)
        + Number(stones.needGoldIllusion.innerHTML)
        + Number(stones.needGoldWitchcraft.innerHTML)
        + Number(stones.needGoldRecovery.innerHTML)
        + Number(stones.needGoldChange.innerHTML)
        + Number(stones.needGoldEnchantment.innerHTML)
        + Number(perks_gold_cost);

    if (allGoldTable.innerHTML > 0) {
        allGoldTable.classList.remove('text-danger');
        allGoldTable.classList.add('text-success');
    }
}

// расчет всех ячеек с золотом с таблицы
function getAllGoldFromTable() {
    allLPTable.innerHTML =
        Number(stones.needLPBlacksmith.innerHTML)
        + Number(stones.needLPHeavyArmor.innerHTML)
        + Number(stones.needLPTwoHandedWeapon.innerHTML)
        + Number(stones.needLPOneHandedWeapon.innerHTML)
        + Number(stones.needLPShooting.innerHTML)
        + Number(stones.needLPBlocking.innerHTML)
        + Number(stones.needLPEvasion.innerHTML)
        + Number(stones.needLPStealth.innerHTML)
        + Number(stones.needLPBreaking.innerHTML)
        + Number(stones.needLPPickpocketing.innerHTML)
        + Number(stones.needLPSpeech.innerHTML)
        + Number(stones.needLPAlchemy.innerHTML)

        + Number(stones.needLPDestruction.innerHTML)
        + Number(stones.needLPIllusion.innerHTML)
        + Number(stones.needLPWitchcraft.innerHTML)
        + Number(stones.needLPRecovery.innerHTML)
        + Number(stones.needLPChange.innerHTML)
        + Number(stones.needLPEnchantment.innerHTML)
        + Number(perks_lp_cost);

    if (allLPTable.innerHTML > 0) {
        allLPTable.classList.remove('text-danger');
        allLPTable.classList.add('text-success');
    }

}

// расчет значений из текущего и до которого нужно подня навыка
function calcLpAndGold(currentSkillValue, countValue, needLp, needGold) {
    let minus = countValue - currentSkillValue;
    needLp.innerHTML = CalculateLPCost(Number(currentSkillValue), minus);
    needGold.innerHTML = CalculateGCost(Number(currentSkillValue), minus);
}
chosen_stone();
function formula() {

    calcLpAndGold(stones.Blacksmith.value, stones.BlacksmithValue.value, stones.needLPBlacksmith, stones.needGoldBlacksmith);
    calcLpAndGold(stones.OneHandedWeapon.value, stones.OneHandedWeaponValue.value, stones.needLPOneHandedWeapon, stones.needGoldOneHandedWeapon);
    calcLpAndGold(stones.HeavyArmor.value, stones.HeavyArmorValue.value, stones.needLPHeavyArmor, stones.needGoldHeavyArmor);
    calcLpAndGold(stones.TwoHandedWeapon.value, stones.TwoHandedWeaponValue.value, stones.needLPTwoHandedWeapon, stones.needGoldTwoHandedWeapon);
    calcLpAndGold(stones.Shooting.value, stones.ShootingValue.value, stones.needLPShooting, stones.needGoldShooting);
    calcLpAndGold(stones.Blocking.value, stones.BlockingValue.value, stones.needLPBlocking, stones.needGoldBlocking);

    // расчет лп + золота вор
    calcLpAndGold(stones.Evasion.value, stones.EvasionValue.value, stones.needLPEvasion, stones.needGoldEvasion);
    calcLpAndGold(stones.Stealth.value, stones.StealthValue.value, stones.needLPStealth, stones.needGoldStealth);
    calcLpAndGold(stones.Breaking.value, stones.BreakingValue.value, stones.needLPBreaking, stones.needGoldBreaking);
    calcLpAndGold(stones.Pickpocketing.value, stones.PickpocketingValue.value, stones.needLPPickpocketing, stones.needGoldPickpocketing);
    calcLpAndGold(stones.Speech.value, stones.SpeechValue.value, stones.needLPSpeech, stones.needGoldSpeech);
    calcLpAndGold(stones.Alchemy.value, stones.AlchemyValue.value, stones.needLPAlchemy, stones.needGoldAlchemy);

    // расчет лп + золота маг
    calcLpAndGold(stones.Illusion.value, stones.IllusionValue.value, stones.needLPIllusion, stones.needGoldIllusion);
    calcLpAndGold(stones.Destruction.value, stones.DestructionValue.value, stones.needLPDestruction, stones.needGoldDestruction);
    calcLpAndGold(stones.Witchcraft.value, stones.WitchcraftValue.value, stones.needLPWitchcraft, stones.needGoldWitchcraft);
    calcLpAndGold(stones.Recovery.value, stones.RecoveryValue.value, stones.needLPRecovery, stones.needGoldRecovery);
    calcLpAndGold(stones.Change.value, stones.ChangeValue.value, stones.needLPChange, stones.needGoldChange);
    calcLpAndGold(stones.Enchantment.value, stones.EnchantmentValue.value, stones.needLPEnchantment, stones.needGoldEnchantment);


    // перки
    calculate()
    // расчет всех ячеек с лп со всей таблицы
    getAllLPFromTable();
    // расчет всех ячеек с золотом со всей таблицы
    getAllGoldFromTable();
    // расчет уровня исходя из количества лп
    lp_calc_funcs.calculate_needed_lvl();


}

races.raceArgo.addEventListener('click', change_stats_funcs.changeArgoStats);
races.raceOrc.addEventListener('click', change_stats_funcs.changeOrcStats);
races.raceNord.addEventListener('click', change_stats_funcs.changeNordStats);
races.raceRedgarc.addEventListener('click', change_stats_funcs.changeRedgarcStats);
races.raceDanmer.addEventListener('click', change_stats_funcs.changeDanmerStats);
races.raceImperec.addEventListener('click', change_stats_funcs.changeImperecStats);
races.raceBosmer.addEventListener('click', change_stats_funcs.changeBosmerStats);
races.raceCatjit.addEventListener('click', change_stats_funcs.changeCatjitStats);
races.raceAltmer.addEventListener('click', change_stats_funcs.changeAltmerStats);
races.raceBreton.addEventListener('click', change_stats_funcs.changeBretonStats);

result.addEventListener('click', formula);

