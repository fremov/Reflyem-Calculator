// warrior
const Blacksmith = document.getElementById('Blacksmith');
const OneHandedWeapon = document.getElementById('OneHandedWeapon');
const HeavyArmor = document.getElementById('HeavyArmor');
const TwoHandedWeapon = document.getElementById('TwoHandedWeapon');
const Shooting = document.getElementById('Shooting');
const Blocking = document.getElementById('Blocking');
// warrior

// thief
const Evasion = document.getElementById('Evasion');
const Stealth = document.getElementById('Stealth');
const Breaking = document.getElementById('Breaking');
const Pickpocketing = document.getElementById('Pickpocketing');
const Speech = document.getElementById('Speech');
const Alchemy = document.getElementById('Alchemy');
// thief

// mage
const Illusion = document.getElementById('Illusion');
const Destruction = document.getElementById('Destruction');
const Witchcraft = document.getElementById('Witchcraft');
const Recovery = document.getElementById('Recovery');
const Change = document.getElementById('Change');
const Enchantment = document.getElementById('Enchantment');
// mage

// values

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


export default {
    Blacksmith,
    OneHandedWeapon,
    HeavyArmor,
    TwoHandedWeapon,
    Shooting,
    Blocking,
    Evasion,
    Stealth,
    Breaking,
    Pickpocketing,
    Speech,
    Alchemy,
    Illusion,
    Destruction,
    Witchcraft,
    Recovery,
    Change,
    Enchantment,


    BlacksmithValue,
    OneHandedWeaponValue,
    HeavyArmorValue,
    TwoHandedWeaponValue,
    ShootingValue,
    BlockingValue,
    EvasionValue,
    StealthValue,
    BreakingValue,
    PickpocketingValue,
    SpeechValue,
    AlchemyValue,
    IllusionValue,
    DestructionValue,
    WitchcraftValue,
    RecoveryValue,
    ChangeValue,
    EnchantmentValue,

    needLPBlacksmith,
    needLPOneHandedWeapon,
    needLPHeavyArmor,
    needLPTwoHandedWeapon,
    needLPShooting,
    needLPBlocking,
    needLPEvasion,
    needLPStealth,
    needLPBreaking,
    needLPPickpocketing,
    needLPSpeech,
    needLPAlchemy,
    needLPIllusion,
    needLPDestruction,
    needLPWitchcraft,
    needLPRecovery,
    needLPChange,
    needLPEnchantment,

    needGoldBlacksmith,
    needGoldOneHandedWeapon,
    needGoldHeavyArmor,
    needGoldTwoHandedWeapon,
    needGoldShooting,
    needGoldBlocking,
    needGoldEvasion,
    needGoldStealth,
    needGoldBreaking,
    needGoldPickpocketing,
    needGoldSpeech,
    needGoldAlchemy,
    needGoldIllusion,
    needGoldDestruction,
    needGoldWitchcraft,
    needGoldRecovery,
    needGoldChange,
    needGoldEnchantment,

}