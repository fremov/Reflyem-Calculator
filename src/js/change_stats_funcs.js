import stones from "./table_fields.js";

//выбранная раса для отображения в модалке расчета
export let chosenRace = document.getElementById('chosenRace');

export function set_warrior_stats_5() {
    stones.Blacksmith.value = 5;
    stones.OneHandedWeapon.value = 5;
    stones.HeavyArmor.value = 5;
    stones.TwoHandedWeapon.value = 5;
    stones.Shooting.value = 5;
    stones.Blocking.value = 5;
}

export function set_thief_stats_5() {
    stones.Evasion.value = 5;
    stones.Stealth.value = 5;
    stones.Breaking.value = 5;
    stones.Pickpocketing.value = 5;
    stones.Speech.value = 5;
    stones.Alchemy.value = 5;
}

export function set_mage_stats_5() {
    stones.Illusion.value = 5;
    stones.Destruction.value = 5;
    stones.Witchcraft.value = 5;
    stones.Recovery.value = 5;
    stones.Change.value = 5;
    stones.Enchantment.value = 5;
}

export function changeArgoStats() {
    chosenRace.innerText = 'Аргонианин';
    chosenRace.classList.remove('text-danger');
    chosenRace.classList.add('text-success');
    // console.log('Аргонианин');
    set_warrior_stats_5()

    stones.Evasion.value = 15;
    stones.Stealth.value = 10;
    stones.Breaking.value = 15;
    stones.Pickpocketing.value = 10;
    stones.Speech.value = 5;
    stones.Alchemy.value = 5;

    set_mage_stats_5();
    stones.Recovery.value = 10;
    stones.Change.value = 10;

}

export function changeOrcStats() {
    chosenRace.innerText = 'Орк';
    chosenRace.classList.remove('text-danger');
    chosenRace.classList.add('text-success');
    // console.log('Орк');

    stones.Blacksmith.value = 15;
    stones.OneHandedWeapon.value = 10;
    stones.HeavyArmor.value = 15;
    stones.TwoHandedWeapon.value = 10;
    stones.Shooting.value = 5;
    stones.Blocking.value = 10;

    set_thief_stats_5();
    stones.Evasion.value = 10;

    set_mage_stats_5();
}

export function changeNordStats() {
    chosenRace.innerText = 'Норд';
    chosenRace.classList.remove('text-danger');
    chosenRace.classList.add('text-success');
    // console.log('Норд');

    stones.Blacksmith.value = 15;
    stones.OneHandedWeapon.value = 10;
    stones.HeavyArmor.value = 10;
    stones.TwoHandedWeapon.value = 15;
    stones.Shooting.value = 5;
    stones.Blocking.value = 10;

    set_thief_stats_5()
    stones.Evasion.value = 10;

    set_mage_stats_5();
}

export function changeRedgarcStats() {
    chosenRace.innerText = 'Редгард';
    chosenRace.classList.remove('text-danger');
    chosenRace.classList.add('text-success');
    // console.log('Редгард');

    stones.Blacksmith.value = 10;
    stones.OneHandedWeapon.value = 20;
    stones.HeavyArmor.value = 5;
    stones.TwoHandedWeapon.value = 10;
    stones.Shooting.value = 10;
    stones.Blocking.value = 10;

    set_thief_stats_5()
    stones.Evasion.value = 10;

    set_mage_stats_5();
}

export function changeDanmerStats() {
    chosenRace.innerText = 'Данмер';
    chosenRace.classList.remove('text-danger');
    chosenRace.classList.add('text-success');
    // console.log('Данмер');

    set_warrior_stats_5();
    stones.OneHandedWeapon.value = 15;

    set_thief_stats_5();
    stones.Evasion.value = 10;
    stones.Stealth.value = 10;


    stones.Illusion.value = 10;
    stones.Destruction.value = 15;
    stones.Witchcraft.value = 5;
    stones.Recovery.value = 5;
    stones.Change.value = 10;
    stones.Enchantment.value = 5;
}

export function changeImperecStats() {
    chosenRace.innerText = 'Имперец';
    chosenRace.classList.remove('text-danger');
    chosenRace.classList.add('text-success');
    // console.log('Имперец');

    stones.Blacksmith.value = 5;
    stones.OneHandedWeapon.value = 10;
    stones.HeavyArmor.value = 10;
    stones.TwoHandedWeapon.value = 5;
    stones.Shooting.value = 5;
    stones.Blocking.value = 10;

    set_thief_stats_5();
    stones.Speech.value = 15;

    stones.Illusion.value = 5;
    stones.Destruction.value = 10;
    stones.Witchcraft.value = 5;
    stones.Recovery.value = 15;
    stones.Change.value = 5;
    stones.Enchantment.value = 5;
}

export function changeBosmerStats() {
    chosenRace.innerText = 'Босмер';
    chosenRace.classList.remove('text-danger');
    chosenRace.classList.add('text-success');
    // console.log('Босмер');

    stones.Blacksmith.value = 15;
    stones.OneHandedWeapon.value = 5;
    stones.HeavyArmor.value = 5;
    stones.TwoHandedWeapon.value = 5;
    stones.Shooting.value = 20;
    stones.Blocking.value = 5;

    stones.Evasion.value = 10;
    stones.Stealth.value = 10;
    stones.Breaking.value = 10;
    stones.Pickpocketing.value = 10;
    stones.Speech.value = 5;
    stones.Alchemy.value = 10;

    set_mage_stats_5();
}

export function changeCatjitStats() {
    chosenRace.innerText = 'Каджит';
    chosenRace.classList.remove('text-danger');
    chosenRace.classList.add('text-success');
    // console.log('Каджит');

    set_warrior_stats_5();

    stones.Evasion.value = 10;
    stones.Stealth.value = 15;
    stones.Breaking.value = 10;
    stones.Pickpocketing.value = 10;
    stones.Speech.value = 10;
    stones.Alchemy.value = 10;

    set_mage_stats_5();
}

export function changeAltmerStats() {
    chosenRace.innerText = 'Альтмер';
    chosenRace.classList.remove('text-danger');
    chosenRace.classList.add('text-success');
    // console.log('Альтмер');

    set_warrior_stats_5();

    set_thief_stats_5();

    stones.Illusion.value = 15;
    stones.Destruction.value = 15;
    stones.Witchcraft.value = 10;
    stones.Recovery.value = 10;
    stones.Change.value = 10;
    stones.Enchantment.value = 10;
}

export function changeBretonStats() {
    chosenRace.innerText = 'Бретон';
    chosenRace.classList.remove('text-danger');
    chosenRace.classList.add('text-success');
    // console.log('Бретон');

    set_warrior_stats_5();

    set_thief_stats_5()
    stones.Speech.value = 10;
    stones.Alchemy.value = 10;

    stones.Illusion.value = 10;
    stones.Destruction.value = 5;
    stones.Witchcraft.value = 15;
    stones.Recovery.value = 10;
    stones.Change.value = 10;
    stones.Enchantment.value = 5;
}