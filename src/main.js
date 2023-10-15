'use strict';
import races from './js/races.js';
import * as change_stats_funcs from './js/change_stats_funcs.js'
import * as lp_calc_funcs from './js/lp_calc_funcs.js';
import {chosen_stone, studentStoneBonusLp} from "./js/chosen_stone.js";
import table_fields from "./js/table_fields.js";


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
    if (numPerksInput.value === "0" || numPerksInput.value === '') {
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
        String(Number(table_fields.needGoldBlacksmith.innerHTML)
        + Number(table_fields.needGoldHeavyArmor.innerHTML)
        + Number(table_fields.needGoldTwoHandedWeapon.innerHTML)
        + Number(table_fields.needGoldOneHandedWeapon.innerHTML)
        + Number(table_fields.needGoldShooting.innerHTML)
        + Number(table_fields.needGoldBlocking.innerHTML)

        + Number(table_fields.needGoldEvasion.innerHTML)
        + Number(table_fields.needGoldStealth.innerHTML)
        + Number(table_fields.needGoldBreaking.innerHTML)
        + Number(table_fields.needGoldPickpocketing.innerHTML)
        + Number(table_fields.needGoldSpeech.innerHTML)
        + Number(table_fields.needGoldAlchemy.innerHTML)

        + Number(table_fields.needGoldDestruction.innerHTML)
        + Number(table_fields.needGoldIllusion.innerHTML)
        + Number(table_fields.needGoldWitchcraft.innerHTML)
        + Number(table_fields.needGoldRecovery.innerHTML)
        + Number(table_fields.needGoldChange.innerHTML)
        + Number(table_fields.needGoldEnchantment.innerHTML)
        + Number(perks_gold_cost));

    if (allGoldTable.innerHTML > 0) {
        allGoldTable.classList.remove('text-danger');
        allGoldTable.classList.add('text-success');
    }
}

// расчет всех ячеек с золотом с таблицы
function getAllGoldFromTable() {
    allLPTable.innerHTML =
        String(Number(table_fields.needLPBlacksmith.innerHTML)
        + Number(table_fields.needLPHeavyArmor.innerHTML)
        + Number(table_fields.needLPTwoHandedWeapon.innerHTML)
        + Number(table_fields.needLPOneHandedWeapon.innerHTML)
        + Number(table_fields.needLPShooting.innerHTML)
        + Number(table_fields.needLPBlocking.innerHTML)
        + Number(table_fields.needLPEvasion.innerHTML)
        + Number(table_fields.needLPStealth.innerHTML)
        + Number(table_fields.needLPBreaking.innerHTML)
        + Number(table_fields.needLPPickpocketing.innerHTML)
        + Number(table_fields.needLPSpeech.innerHTML)
        + Number(table_fields.needLPAlchemy.innerHTML)

        + Number(table_fields.needLPDestruction.innerHTML)
        + Number(table_fields.needLPIllusion.innerHTML)
        + Number(table_fields.needLPWitchcraft.innerHTML)
        + Number(table_fields.needLPRecovery.innerHTML)
        + Number(table_fields.needLPChange.innerHTML)
        + Number(table_fields.needLPEnchantment.innerHTML)
        + Number(perks_lp_cost));

    if (allLPTable.innerHTML > 0) {
        allLPTable.classList.remove('text-danger');
        allLPTable.classList.add('text-success');
    }
    // console.log(studentStoneBonusLp)

}

// расчет значений из текущего и до которого нужно подня навыка
function calcLpAndGold(currentSkillValue, countValue, needLp, needGold) {
    let minus = countValue - currentSkillValue;
    needLp.innerHTML = CalculateLPCost(Number(currentSkillValue), minus);
    needGold.innerHTML = CalculateGCost(Number(currentSkillValue), minus);
}
chosen_stone();
function formula() {

    calcLpAndGold(table_fields.Blacksmith.value, table_fields.BlacksmithValue.value, table_fields.needLPBlacksmith, table_fields.needGoldBlacksmith);
    calcLpAndGold(table_fields.OneHandedWeapon.value, table_fields.OneHandedWeaponValue.value, table_fields.needLPOneHandedWeapon, table_fields.needGoldOneHandedWeapon);
    calcLpAndGold(table_fields.HeavyArmor.value, table_fields.HeavyArmorValue.value, table_fields.needLPHeavyArmor, table_fields.needGoldHeavyArmor);
    calcLpAndGold(table_fields.TwoHandedWeapon.value, table_fields.TwoHandedWeaponValue.value, table_fields.needLPTwoHandedWeapon, table_fields.needGoldTwoHandedWeapon);
    calcLpAndGold(table_fields.Shooting.value, table_fields.ShootingValue.value, table_fields.needLPShooting, table_fields.needGoldShooting);
    calcLpAndGold(table_fields.Blocking.value, table_fields.BlockingValue.value, table_fields.needLPBlocking, table_fields.needGoldBlocking);

    // расчет лп + золота вор
    calcLpAndGold(table_fields.Evasion.value, table_fields.EvasionValue.value, table_fields.needLPEvasion, table_fields.needGoldEvasion);
    calcLpAndGold(table_fields.Stealth.value, table_fields.StealthValue.value, table_fields.needLPStealth, table_fields.needGoldStealth);
    calcLpAndGold(table_fields.Breaking.value, table_fields.BreakingValue.value, table_fields.needLPBreaking, table_fields.needGoldBreaking);
    calcLpAndGold(table_fields.Pickpocketing.value, table_fields.PickpocketingValue.value, table_fields.needLPPickpocketing, table_fields.needGoldPickpocketing);
    calcLpAndGold(table_fields.Speech.value, table_fields.SpeechValue.value, table_fields.needLPSpeech, table_fields.needGoldSpeech);
    calcLpAndGold(table_fields.Alchemy.value, table_fields.AlchemyValue.value, table_fields.needLPAlchemy, table_fields.needGoldAlchemy);

    // расчет лп + золота маг
    calcLpAndGold(table_fields.Illusion.value, table_fields.IllusionValue.value, table_fields.needLPIllusion, table_fields.needGoldIllusion);
    calcLpAndGold(table_fields.Destruction.value, table_fields.DestructionValue.value, table_fields.needLPDestruction, table_fields.needGoldDestruction);
    calcLpAndGold(table_fields.Witchcraft.value, table_fields.WitchcraftValue.value, table_fields.needLPWitchcraft, table_fields.needGoldWitchcraft);
    calcLpAndGold(table_fields.Recovery.value, table_fields.RecoveryValue.value, table_fields.needLPRecovery, table_fields.needGoldRecovery);
    calcLpAndGold(table_fields.Change.value, table_fields.ChangeValue.value, table_fields.needLPChange, table_fields.needGoldChange);
    calcLpAndGold(table_fields.Enchantment.value, table_fields.EnchantmentValue.value, table_fields.needLPEnchantment, table_fields.needGoldEnchantment);


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

