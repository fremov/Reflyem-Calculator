'use strict';

const FiE_GV_IncreaseCostEvery = 25;
const FiE_GV_CostLPMult = 1;
const FiE_GV_CostGoldMult = 60;


let result = document.getElementById('result');

let raceArgo = document.getElementById('raceArgo');
let raceOrc = document.getElementById('raceOrc');
let raceNord = document.getElementById('raceNord');
let raceRedgarc = document.getElementById('raceRedgarc');
let raceDanmer = document.getElementById('raceDanmer');
let raceImperec = document.getElementById('raceImperec');
let raceBosmer = document.getElementById('raceBosmer');
let raceCatjit = document.getElementById('raceCatjit');
let raceAltmer = document.getElementById('raceAltmer');
let raceBreton = document.getElementById('raceBreton');

// warrior
let Blacksmith = document.getElementById('Blacksmith');
let OneHandedWeapon = document.getElementById('OneHandedWeapon');
let HeavyArmor = document.getElementById('HeavyArmor');
let TwoHandedWeapon = document.getElementById('TwoHandedWeapon');
let Shooting = document.getElementById('Shooting');
let Blocking = document.getElementById('Blocking');
// warrior

// thief
let Evasion = document.getElementById('Evasion');
let Stealth = document.getElementById('Stealth');
let Breaking = document.getElementById('Breaking');
let Pickpocketing = document.getElementById('Pickpocketing');
let Speech = document.getElementById('Speech');
let Alchemy = document.getElementById('Alchemy');
// thief

// mage
let Illusion = document.getElementById('Illusion');
let Destruction = document.getElementById('Destruction');
let Witchcraft = document.getElementById('Witchcraft');
let Recovery = document.getElementById('Recovery');
let Change = document.getElementById('Change');
let Enchantment = document.getElementById('Enchantment');
// mage


// Значение до которого вы хотите повысить навык воин
let BlacksmithValue = document.getElementById('BlacksmithValue');
let OneHandedWeaponValue = document.getElementById('OneHandedWeaponValue');
let HeavyArmorValue = document.getElementById('HeavyArmorValue');
let TwoHandedWeaponValue = document.getElementById('TwoHandedWeaponValue');
let ShootingValue = document.getElementById('ShootingValue');
let BlockingValue = document.getElementById('BlockingValue');

// Значение до которого вы хотите повысить навык вор
let EvasionValue = document.getElementById('EvasionValue');
let StealthValue = document.getElementById('StealthValue');
let BreakingValue = document.getElementById('BreakingValue');
let PickpocketingValue = document.getElementById('PickpocketingValue');
let SpeechValue = document.getElementById('SpeechValue');
let AlchemyValue = document.getElementById('AlchemyValue');

// Значение до которого вы хотите повысить навык вор
let IllusionValue = document.getElementById('IllusionValue');
let DestructionValue = document.getElementById('DestructionValue');
let WitchcraftValue = document.getElementById('WitchcraftValue');
let RecoveryValue = document.getElementById('RecoveryValue');
let ChangeValue = document.getElementById('ChangeValue');
let EnchantmentValue = document.getElementById('EnchantmentValue');


// Требуется очков обучения воин
let needLPBlacksmith = document.getElementById('needLPBlacksmith');
let needLPOneHandedWeapon = document.getElementById('needLPOneHandedWeapon');
let needLPHeavyArmor = document.getElementById('needLPHeavyArmor');
let needLPTwoHandedWeapon = document.getElementById('needLPTwoHandedWeapon');
let needLPShooting = document.getElementById('needLPShooting');
let needLPBlocking = document.getElementById('needLPBlocking');

// Требуется очков обучения вор
let needLPEvasion = document.getElementById('needLPEvasion');
let needLPStealth = document.getElementById('needLPStealth');
let needLPBreaking = document.getElementById('needLPBreaking');
let needLPPickpocketing = document.getElementById('needLPPickpocketing');
let needLPSpeech = document.getElementById('needLPSpeech');
let needLPAlchemy = document.getElementById('needLPAlchemy');

// Требуется очков обучения маг
let needLPIllusion = document.getElementById('needLPIllusion');
let needLPDestruction = document.getElementById('needLPDestruction');
let needLPWitchcraft = document.getElementById('needLPWitchcraft');
let needLPRecovery = document.getElementById('needLPRecovery');
let needLPChange = document.getElementById('needLPChange');
let needLPEnchantment = document.getElementById('needLPEnchantment');


let allGoldTable = document.getElementById('allGoldTable');
let allLPTable = document.getElementById('allLPTable');
// Требуется золота для обучения воин

let needGoldBlacksmith = document.getElementById('needGoldBlacksmith');
let needGoldOneHandedWeapon = document.getElementById('needGoldOneHandedWeapon');
let needGoldHeavyArmor = document.getElementById('needGoldHeavyArmor');
let needGoldTwoHandedWeapon = document.getElementById('needGoldTwoHandedWeapon');
let needGoldShooting = document.getElementById('needGoldShooting');
let needGoldBlocking = document.getElementById('needGoldBlocking');
// Требуется золота для обучения вор

let needGoldEvasion = document.getElementById('needGoldEvasion');
let needGoldStealth = document.getElementById('needGoldStealth');
let needGoldBreaking = document.getElementById('needGoldBreaking');
let needGoldPickpocketing = document.getElementById('needGoldPickpocketing');
let needGoldSpeech = document.getElementById('needGoldSpeech');
let needGoldAlchemy = document.getElementById('needGoldAlchemy');
// Требуется золота для обучения маг

let needGoldIllusion = document.getElementById('needGoldIllusion');
let needGoldDestruction = document.getElementById('needGoldDestruction');
let needGoldWitchcraft = document.getElementById('needGoldWitchcraft');
let needGoldRecovery = document.getElementById('needGoldRecovery');
let needGoldChange = document.getElementById('needGoldChange');
let needGoldEnchantment = document.getElementById('needGoldEnchantment');


// для проверки ЛП
let tenLPOn = true;
let fifteenLpOn = true;
let twentyLpOn = true;

//выбранная раса для отображения в модалке расчета
let chosenRace = document.getElementById('chosenRace');
// выбранный камень для отображения в модалке расчета
let chosenStone = document.getElementById('chosenStone');
// выбранный уровень сложности для отображения в модалке расчета
let chosenLevel = document.getElementById('chosenLevel');
// выбранный уровень сложности 10 15 20
let tenLp = document.getElementById('tenLP');
let fifteenLp = document.getElementById('fifteenLp');
let twentyLp = document.getElementById('twentyLP');
// присваивается значение в зависимоти от уровня сложности и потом на него делить
let needLvlForUp = 0;
let needLvlForUpF = document.getElementById('needLvlForUpF');

// лп за перки
let perks_lp_cost;
// голды за перки
let perks_gold_cost;


function tenLpFunc() {

    if (tenLPOn) {
        tenLPOn = false;
        needLvlForUp = 10;
        tenLP.classList.add('text-success');
        // console.log('10_lp');
        chosenLevel.innerText = '10LP';
        chosenLevel.classList.remove('text-danger');
        chosenLevel.classList.add('text-success');
    } else if (!tenLPOn) {
        needLvlForUp = 0;
        tenLP.classList.remove('text-success');
        tenLPOn = true;
    }
}

function fifteenLpFunc() {

    if (fifteenLpOn) {
        fifteenLpOn = false;
        needLvlForUp = 15;
        fifteenLp.classList.add('text-success');
        // console.log('15_lp');
        chosenLevel.innerText = '15LP';
        chosenLevel.classList.remove('text-danger');
        chosenLevel.classList.add('text-success');
    } else if (!fifteenLpOn) {
        needLvlForUp = 0;
        fifteenLp.classList.remove('text-success');
        fifteenLpOn = true;
    }
}

function twentyLpFunc() {
    if (twentyLpOn) {
        twentyLpOn = false;
        needLvlForUp = 20;
        twentyLp.classList.add('text-success');
        // console.log('20_lp');
        chosenLevel.innerText = '20LP';
        chosenLevel.classList.remove('text-danger');
        chosenLevel.classList.add('text-success');
    } else if (!twentyLpOn) {
        needLvlForUp = 0;
        twentyLp.classList.remove('text-success');
        twentyLpOn = true;
    }

}

// Проверка выбранного камня
// Получаем все radio кнопки в форме
let radioButtons = document.getElementsByName('stoneClass');

let lastSelectedStone; // переменная для хранения последней выбранной радиокнопки

radioButtons.forEach(function (radioButton) {
    radioButton.addEventListener('change', function () {
        if (radioButton.checked) {
            // console.log(radioButton.value);

            // вычитаем 5 из поля последней выбранной кнопки (если она есть)
            if (lastSelectedStone) {
                switch (lastSelectedStone.value) {
                    case 'warrior':
                        Blacksmith.value = Number(Blacksmith.value) - 5;
                        OneHandedWeapon.value = Number(OneHandedWeapon.value) - 5;
                        HeavyArmor.value = Number(HeavyArmor.value) - 5;
                        TwoHandedWeapon.value = Number(TwoHandedWeapon.value) - 5;
                        Shooting.value = Number(Shooting.value) - 5;
                        Blocking.value = Number(Blocking.value) - 5;
                        break;
                    case 'mage':
                        // здесь нужно написать вычитание 5 из полей для случая "mage"
                        Illusion.value = Number(Illusion.value) - 5;
                        Destruction.value = Number(Destruction.value) - 5;
                        Witchcraft.value = Number(Witchcraft.value) - 5;
                        Recovery.value = Number(Recovery.value) - 5;
                        Change.value = Number(Change.value) - 5;
                        Enchantment.value = Number(Enchantment.value) - 5;
                        break;
                    case 'thief':
                        // здесь нужно написать вычитание 5 из полей для случая "rogue"
                        Evasion.value = Number(Evasion.value) - 5;
                        Stealth.value = Number(Stealth.value) - 5;
                        Breaking.value = Number(Breaking.value) - 5;
                        Pickpocketing.value = Number(Pickpocketing.value) - 5;
                        Speech.value = Number(Speech.value) - 5;
                        Alchemy.value = Number(Alchemy.value) - 5;
                        break;
                }
            }
            // добавляем 5 к полю выбранной кнопки
            switch (radioButton.value) {
                case 'warrior':
                    chosenStone.innerText = 'Воин';
                    chosenStone.classList.remove('text-danger');
                    chosenStone.classList.add('text-success');
                    Blacksmith.value = Number(Blacksmith.value) + 5;
                    OneHandedWeapon.value = Number(OneHandedWeapon.value) + 5;
                    HeavyArmor.value = Number(HeavyArmor.value) + 5;
                    TwoHandedWeapon.value = Number(TwoHandedWeapon.value) + 5;
                    Shooting.value = Number(Shooting.value) + 5;
                    Blocking.value = Number(Blocking.value) + 5;
                    break;
                case 'mage':
                    // здесь нужно написать добавление 5 к полям для случая "mage"
                    chosenStone.innerText = 'Маг';
                    chosenStone.classList.remove('text-danger');
                    chosenStone.classList.add('text-success');
                    Illusion.value = Number(Illusion.value) + 5;
                    Destruction.value = Number(Destruction.value) + 5;
                    Witchcraft.value = Number(Witchcraft.value) + 5;
                    Recovery.value = Number(Recovery.value) + 5;
                    Change.value = Number(Change.value) + 5;
                    Enchantment.value = Number(Enchantment.value) + 5;
                    break;
                case 'thief':
                    // здесь нужно написать добавление 5 к полям для случая "rogue"
                    chosenStone.innerText = 'Вор';
                    chosenStone.classList.remove('text-danger');
                    chosenStone.classList.add('text-success');
                    Evasion.value = Number(Evasion.value) + 5;
                    Stealth.value = Number(Stealth.value) + 5;
                    Breaking.value = Number(Breaking.value) + 5;
                    Pickpocketing.value = Number(Pickpocketing.value) + 5;
                    Speech.value = Number(Speech.value) + 5;
                    Alchemy.value = Number(Alchemy.value) + 5;
                    break;
            }
            lastSelectedStone = radioButton; // сохраняем текущую кнопку в lastSelected
        }
    });
});

function set_warrior_stats_5() {
    Blacksmith.value = 5;
    OneHandedWeapon.value = 5;
    HeavyArmor.value = 5;
    TwoHandedWeapon.value = 5;
    Shooting.value = 5;
    Blocking.value = 5;
}

function set_thief_stats_5() {
    Evasion.value = 5;
    Stealth.value = 5;
    Breaking.value = 5;
    Pickpocketing.value = 5;
    Speech.value = 5;
    Alchemy.value = 5;
}

function set_mage_stats_5() {
    Illusion.value = 5;
    Destruction.value = 5;
    Witchcraft.value = 5;
    Recovery.value = 5;
    Change.value = 5;
    Enchantment.value = 5;
}


function changeArgoStats() {
    chosenRace.innerText = 'Аргонианин';
    chosenRace.classList.remove('text-danger');
    chosenRace.classList.add('text-success');
    // console.log('Аргонианин');
    set_warrior_stats_5()

    Evasion.value = 15;
    Stealth.value = 10;
    Breaking.value = 15;
    Pickpocketing.value = 10;
    Speech.value = 5;
    Alchemy.value = 5;

    set_mage_stats_5();
    Recovery.value = 10;
    Change.value = 10;

}

function changeOrcStats() {
    chosenRace.innerText = 'Орк';
    chosenRace.classList.remove('text-danger');
    chosenRace.classList.add('text-success');
    // console.log('Орк');

    Blacksmith.value = 15;
    OneHandedWeapon.value = 10;
    HeavyArmor.value = 15;
    TwoHandedWeapon.value = 10;
    Shooting.value = 5;
    Blocking.value = 10;

    set_thief_stats_5();
    Evasion.value = 10;

    set_mage_stats_5();
}

function changeNordStats() {
    chosenRace.innerText = 'Норд';
    chosenRace.classList.remove('text-danger');
    chosenRace.classList.add('text-success');
    // console.log('Норд');

    Blacksmith.value = 15;
    OneHandedWeapon.value = 10;
    HeavyArmor.value = 10;
    TwoHandedWeapon.value = 15;
    Shooting.value = 5;
    Blocking.value = 10;

    set_thief_stats_5()
    Evasion.value = 10;

    set_mage_stats_5();
}

function changeRedgarcStats() {
    chosenRace.innerText = 'Редгард';
    chosenRace.classList.remove('text-danger');
    chosenRace.classList.add('text-success');
    // console.log('Редгард');

    Blacksmith.value = 10;
    OneHandedWeapon.value = 20;
    HeavyArmor.value = 5;
    TwoHandedWeapon.value = 10;
    Shooting.value = 10;
    Blocking.value = 10;

    set_thief_stats_5()
    Evasion.value = 10;

    set_mage_stats_5();
}

function changeDanmerStats() {
    chosenRace.innerText = 'Данмер';
    chosenRace.classList.remove('text-danger');
    chosenRace.classList.add('text-success');
    // console.log('Данмер');

    set_warrior_stats_5();
    OneHandedWeapon.value = 15;

    set_thief_stats_5();
    Evasion.value = 10;
    Stealth.value = 10;


    Illusion.value = 10;
    Destruction.value = 15;
    Witchcraft.value = 5;
    Recovery.value = 5;
    Change.value = 10;
    Enchantment.value = 5;
}

function changeImperecStats() {
    chosenRace.innerText = 'Имперец';
    chosenRace.classList.remove('text-danger');
    chosenRace.classList.add('text-success');
    // console.log('Имперец');

    Blacksmith.value = 5;
    OneHandedWeapon.value = 10;
    HeavyArmor.value = 10;
    TwoHandedWeapon.value = 5;
    Shooting.value = 5;
    Blocking.value = 10;

    set_thief_stats_5();
    Speech.value = 15;

    Illusion.value = 5;
    Destruction.value = 10;
    Witchcraft.value = 5;
    Recovery.value = 15;
    Change.value = 5;
    Enchantment.value = 5;
}

function changeBosmerStats() {
    chosenRace.innerText = 'Босмер';
    chosenRace.classList.remove('text-danger');
    chosenRace.classList.add('text-success');
    // console.log('Босмер');

    Blacksmith.value = 15;
    OneHandedWeapon.value = 5;
    HeavyArmor.value = 5;
    TwoHandedWeapon.value = 5;
    Shooting.value = 20;
    Blocking.value = 5;

    Evasion.value = 10;
    Stealth.value = 10;
    Breaking.value = 10;
    Pickpocketing.value = 10;
    Speech.value = 5;
    Alchemy.value = 10;

    set_mage_stats_5();
}

function changeCatjitStats() {
    chosenRace.innerText = 'Каджит';
    chosenRace.classList.remove('text-danger');
    chosenRace.classList.add('text-success');
    // console.log('Каджит');

    set_warrior_stats_5();

    Evasion.value = 10;
    Stealth.value = 15;
    Breaking.value = 10;
    Pickpocketing.value = 10;
    Speech.value = 10;
    Alchemy.value = 10;

    set_mage_stats_5();
}

function changeAltmerStats() {
    chosenRace.innerText = 'Альтмер';
    chosenRace.classList.remove('text-danger');
    chosenRace.classList.add('text-success');
    // console.log('Альтмер');

    set_warrior_stats_5();

    set_thief_stats_5();

    Illusion.value = 15;
    Destruction.value = 15;
    Witchcraft.value = 10;
    Recovery.value = 10;
    Change.value = 10;
    Enchantment.value = 10;
}

function changeBretonStats() {
    chosenRace.innerText = 'Бретон';
    chosenRace.classList.remove('text-danger');
    chosenRace.classList.add('text-success');
    // console.log('Бретон');

    set_warrior_stats_5();

    set_thief_stats_5()
    Speech.value = 10;
    Alchemy.value = 10;

    Illusion.value = 10;
    Destruction.value = 5;
    Witchcraft.value = 15;
    Recovery.value = 10;
    Change.value = 10;
    Enchantment.value = 5;
}

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

    return { "gold": totalGold, "LP": totalLP };
}

function calculate() {
    const numPerksInput = document.getElementById("numPerks");
    const numPerks = parseInt(numPerksInput.value, 10);
    let perkCosts = 0;
    if (numPerksInput.value === "0") {
        // perkCosts = calculatePerksCost(numPerks);
        perks_gold_cost = 0;
        perks_lp_cost = 0
    } else if (!isNaN(numPerks) ) {
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
        Number(needGoldBlacksmith.innerHTML)
        + Number(needGoldHeavyArmor.innerHTML)
        + Number(needGoldTwoHandedWeapon.innerHTML)
        + Number(needGoldOneHandedWeapon.innerHTML)
        + Number(needGoldShooting.innerHTML)
        + Number(needGoldBlocking.innerHTML)

        + Number(needGoldEvasion.innerHTML)
        + Number(needGoldStealth.innerHTML)
        + Number(needGoldBreaking.innerHTML)
        + Number(needGoldPickpocketing.innerHTML)
        + Number(needGoldSpeech.innerHTML)
        + Number(needGoldAlchemy.innerHTML)

        + Number(needGoldDestruction.innerHTML)
        + Number(needGoldIllusion.innerHTML)
        + Number(needGoldWitchcraft.innerHTML)
        + Number(needGoldRecovery.innerHTML)
        + Number(needGoldChange.innerHTML)
        + Number(needGoldEnchantment.innerHTML)
        + Number(perks_gold_cost);

    if (allGoldTable.innerHTML > 0) {
        allGoldTable.classList.remove('text-danger');
        allGoldTable.classList.add('text-success');
    }
}

// расчет всех ячеек с золотом с таблицы
function getAllGoldFromTable() {
    allLPTable.innerHTML =
        Number(needLPBlacksmith.innerHTML)
        + Number(needLPHeavyArmor.innerHTML)
        + Number(needLPTwoHandedWeapon.innerHTML)
        + Number(needLPOneHandedWeapon.innerHTML)
        + Number(needLPShooting.innerHTML)
        + Number(needLPBlocking.innerHTML)
        + Number(needLPEvasion.innerHTML)
        + Number(needLPStealth.innerHTML)
        + Number(needLPBreaking.innerHTML)
        + Number(needLPPickpocketing.innerHTML)
        + Number(needLPSpeech.innerHTML)
        + Number(needLPAlchemy.innerHTML)

        + Number(needLPDestruction.innerHTML)
        + Number(needLPIllusion.innerHTML)
        + Number(needLPWitchcraft.innerHTML)
        + Number(needLPRecovery.innerHTML)
        + Number(needLPChange.innerHTML)
        + Number(needLPEnchantment.innerHTML)
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

function formula() {

    // расчет лп + золота воин
    calcLpAndGold(Blacksmith.value, BlacksmithValue.value, needLPBlacksmith, needGoldBlacksmith);
    calcLpAndGold(OneHandedWeapon.value, OneHandedWeaponValue.value, needLPOneHandedWeapon, needGoldOneHandedWeapon);
    calcLpAndGold(HeavyArmor.value, HeavyArmorValue.value, needLPHeavyArmor, needGoldHeavyArmor);
    calcLpAndGold(TwoHandedWeapon.value, TwoHandedWeaponValue.value, needLPTwoHandedWeapon, needGoldTwoHandedWeapon);
    calcLpAndGold(Shooting.value, ShootingValue.value, needLPShooting, needGoldShooting);
    calcLpAndGold(Blocking.value, BlockingValue.value, needLPBlocking, needGoldBlocking);

    // расчет лп + золота вор
    calcLpAndGold(Evasion.value, EvasionValue.value, needLPEvasion, needGoldEvasion);
    calcLpAndGold(Stealth.value, StealthValue.value, needLPStealth, needGoldStealth);
    calcLpAndGold(Breaking.value, BreakingValue.value, needLPBreaking, needGoldBreaking);
    calcLpAndGold(Pickpocketing.value, PickpocketingValue.value, needLPPickpocketing, needGoldPickpocketing);
    calcLpAndGold(Speech.value, SpeechValue.value, needLPSpeech, needGoldSpeech);
    calcLpAndGold(Alchemy.value, AlchemyValue.value, needLPAlchemy, needGoldAlchemy);

    // расчет лп + золота маг
    calcLpAndGold(Illusion.value, IllusionValue.value, needLPIllusion, needGoldIllusion);
    calcLpAndGold(Destruction.value, DestructionValue.value, needLPDestruction, needGoldDestruction);
    calcLpAndGold(Witchcraft.value, WitchcraftValue.value, needLPWitchcraft, needGoldWitchcraft);
    calcLpAndGold(Recovery.value, RecoveryValue.value, needLPRecovery, needGoldRecovery);
    calcLpAndGold(Change.value, ChangeValue.value, needLPChange, needGoldChange);
    calcLpAndGold(Enchantment.value, EnchantmentValue.value, needLPEnchantment, needGoldEnchantment);


    // перки
    calculate()
    // расчет всех ячеек с лп со всей таблицы
    getAllLPFromTable();
    // расчет всех ячеек с золотом со всей таблицы
    getAllGoldFromTable();

    switch (needLvlForUp) {
        case 10:
            needLvlForUp = Math.ceil(Number(allLPTable.innerHTML) / Number(needLvlForUp));
            needLvlForUpF.innerHTML = needLvlForUp;
            needLvlForUpF.classList.remove('text-danger');
            needLvlForUpF.classList.add('text-success');
            break;
        case 15:
            needLvlForUp = Math.ceil(Number(allLPTable.innerHTML) / Number(needLvlForUp));
            needLvlForUpF.innerHTML = needLvlForUp;
            needLvlForUpF.classList.remove('text-danger');
            needLvlForUpF.classList.add('text-success');
            break;
        case 20:
            needLvlForUp = Math.ceil(Number(allLPTable.innerHTML) / Number(needLvlForUp));
            needLvlForUpF.innerHTML = needLvlForUp;
            needLvlForUpF.classList.remove('text-danger');
            needLvlForUpF.classList.add('text-success');
            break;
        default:
            needLvlForUp = Math.ceil(Number(allLPTable.innerHTML) / 15);
            needLvlForUpF.innerHTML = needLvlForUp;
            needLvlForUpF.classList.remove('text-danger');
            needLvlForUpF.classList.add('text-success');
    }
}

raceArgo.addEventListener('click', changeArgoStats);
raceOrc.addEventListener('click', changeOrcStats);
raceNord.addEventListener('click', changeNordStats);
raceRedgarc.addEventListener('click', changeRedgarcStats);
raceDanmer.addEventListener('click', changeDanmerStats);
raceImperec.addEventListener('click', changeImperecStats);
raceBosmer.addEventListener('click', changeBosmerStats);
raceCatjit.addEventListener('click', changeCatjitStats);
raceAltmer.addEventListener('click', changeAltmerStats);
raceBreton.addEventListener('click', changeBretonStats);

result.addEventListener('click', formula);

tenLp.addEventListener('click', tenLpFunc);
fifteenLp.addEventListener('click', fifteenLpFunc);
twentyLp.addEventListener('click', twentyLpFunc);