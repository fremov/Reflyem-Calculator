import stones from "./table_fields.js";
import {allLPTable, chosenStone} from "../main.js";
import {needLvlForUpF} from "./lp_calc_funcs.js";

export let studentStoneBonusLp
export function chosen_stone() {

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
                                stones.Blacksmith.value = Number(stones.Blacksmith.value) - 5;
                                stones.OneHandedWeapon.value = Number(stones.OneHandedWeapon.value) - 5;
                                stones.HeavyArmor.value = Number(stones.HeavyArmor.value) - 5;
                                stones.TwoHandedWeapon.value = Number(stones.TwoHandedWeapon.value) - 5;
                                stones.Shooting.value = Number(stones.Shooting.value) - 5;
                                stones.Blocking.value = Number(stones.Blocking.value) - 5;
                                break;
                            case 'mage':
                                // здесь нужно написать вычитание 5 из полей для случая "mage"
                                stones.Illusion.value = Number(stones.Illusion.value) - 5;
                                stones.Destruction.value = Number(stones.Destruction.value) - 5;
                                stones.Witchcraft.value = Number(stones.Witchcraft.value) - 5;
                                stones.Recovery.value = Number(stones.Recovery.value) - 5;
                                stones.Change.value = Number(stones.Change.value) - 5;
                                stones.Enchantment.value = Number(stones.Enchantment.value) - 5;
                                break;
                            case 'thief':
                                // здесь нужно написать вычитание 5 из полей для случая "rogue"
                                stones.Evasion.value = Number(stones.Evasion.value) - 5;
                                stones.Stealth.value = Number(stones.Stealth.value) - 5;
                                stones.Breaking.value = Number(stones.Breaking.value) - 5;
                                stones.Pickpocketing.value = Number(stones.Pickpocketing.value) - 5;
                                stones.Speech.value = Number(stones.Speech.value) - 5;
                                stones.Alchemy.value = Number(stones.Alchemy.value) - 5;
                                break;
                            case 'stoneStudent':
                                // здесь нужно написать вычитание 5 из полей для случая "rogue"
                                console.log('Ученик первый')
                                break;
                            case 'stoneAnother':
                                // здесь нужно написать добавление 5 к полям для случая "rogue"
                                chosenStone.innerText = 'Другой';
                                chosenStone.classList.remove('text-danger');
                                chosenStone.classList.add('text-success');
                                stones.Evasion.value = Number(stones.Evasion.value) - 5;
                                stones.Stealth.value = Number(stones.Stealth.value) - 5;
                                stones.Breaking.value = Number(stones.Breaking.value) - 5;
                                stones.Pickpocketing.value = Number(stones.Pickpocketing.value) - 5;
                                stones.Speech.value = Number(stones.Speech.value) - 5;
                                stones.Alchemy.value = Number(stones.Alchemy.value) - 5;

                                // здесь нужно написать вычитание 5 из полей для случая "mage"
                                stones.Illusion.value = Number(stones.Illusion.value) - 5;
                                stones.Destruction.value = Number(stones.Destruction.value) - 5;
                                stones.Witchcraft.value = Number(stones.Witchcraft.value) - 5;
                                stones.Recovery.value = Number(stones.Recovery.value) - 5;
                                stones.Change.value = Number(stones.Change.value) - 5;
                                stones.Enchantment.value = Number(stones.Enchantment.value) - 5;

                                stones.Blacksmith.value = Number(stones.Blacksmith.value) - 5;
                                stones.OneHandedWeapon.value = Number(stones.OneHandedWeapon.value) - 5;
                                stones.HeavyArmor.value = Number(stones.HeavyArmor.value) - 5;
                                stones.TwoHandedWeapon.value = Number(stones.TwoHandedWeapon.value) - 5;
                                stones.Shooting.value = Number(stones.Shooting.value) - 5;
                                stones.Blocking.value = Number(stones.Blocking.value) - 5;

                                break;

                            default:
                                // console.log('default stone');
                                // здесь нужно написать добавление 5 к полям для случая "rogue"
                                chosenStone.innerText = 'Другой';
                                chosenStone.classList.remove('text-danger');
                                chosenStone.classList.add('text-success');
                                break;
                        }
                    }
                    // добавляем 5 к полю выбранной кнопки
                    switch (radioButton.value) {
                        case 'warrior':
                            chosenStone.innerText = 'Воин';
                            chosenStone.classList.remove('text-danger');
                            chosenStone.classList.add('text-success');
                            stones.Blacksmith.value = Number(stones.Blacksmith.value) + 5;
                            stones.OneHandedWeapon.value = Number(stones.OneHandedWeapon.value) + 5;
                            stones.HeavyArmor.value = Number(stones.HeavyArmor.value) + 5;
                            stones.TwoHandedWeapon.value = Number(stones.TwoHandedWeapon.value) + 5;
                            stones.Shooting.value = Number(stones.Shooting.value) + 5;
                            stones.Blocking.value = Number(stones.Blocking.value) + 5;
                            break;
                        case 'mage':
                            // здесь нужно написать добавление 5 к полям для случая "mage"
                            chosenStone.innerText = 'Маг';
                            chosenStone.classList.remove('text-danger');
                            chosenStone.classList.add('text-success');
                            stones.Illusion.value = Number(stones.Illusion.value) + 5;
                            stones.Destruction.value = Number(stones.Destruction.value) + 5;
                            stones.Witchcraft.value = Number(stones.Witchcraft.value) + 5;
                            stones.Recovery.value = Number(stones.Recovery.value) + 5;
                            stones.Change.value = Number(stones.Change.value) + 5;
                            stones.Enchantment.value = Number(stones.Enchantment.value) + 5;
                            break;
                        case 'thief':
                            // здесь нужно написать добавление 5 к полям для случая "rogue"
                            chosenStone.innerText = 'Вор';
                            chosenStone.classList.remove('text-danger');
                            chosenStone.classList.add('text-success');
                            stones.Evasion.value = Number(stones.Evasion.value) + 5;
                            stones.Stealth.value = Number(stones.Stealth.value) + 5;
                            stones.Breaking.value = Number(stones.Breaking.value) + 5;
                            stones.Pickpocketing.value = Number(stones.Pickpocketing.value) + 5;
                            stones.Speech.value = Number(stones.Speech.value) + 5;
                            stones.Alchemy.value = Number(stones.Alchemy.value) + 5;
                            break;
                        case 'stoneStudent':
                            chosenStone.innerText = 'Ученик';
                            chosenStone.classList.remove('text-danger');
                            chosenStone.classList.add('text-success');
                            studentStoneBonusLp = String(Number(allLPTable.innerText) + Number(needLvlForUpF.innerText))
                            break
                        case 'stoneAnother':
                            // здесь нужно написать добавление 5 к полям для случая "rogue"
                            chosenStone.innerText = 'Другой';
                            chosenStone.classList.remove('text-danger');
                            chosenStone.classList.add('text-success');
                            stones.Evasion.value = Number(stones.Evasion.value) + 5;
                            stones.Stealth.value = Number(stones.Stealth.value) + 5;
                            stones.Breaking.value = Number(stones.Breaking.value) + 5;
                            stones.Pickpocketing.value = Number(stones.Pickpocketing.value) + 5;
                            stones.Speech.value = Number(stones.Speech.value) + 5;
                            stones.Alchemy.value = Number(stones.Alchemy.value) + 5;


                            stones.Illusion.value = Number(stones.Illusion.value) + 5;
                            stones.Destruction.value = Number(stones.Destruction.value) + 5;
                            stones.Witchcraft.value = Number(stones.Witchcraft.value) + 5;
                            stones.Recovery.value = Number(stones.Recovery.value) + 5;
                            stones.Change.value = Number(stones.Change.value) + 5;
                            stones.Enchantment.value = Number(stones.Enchantment.value) + 5;


                            stones.Blacksmith.value = Number(stones.Blacksmith.value) + 5;
                            stones.OneHandedWeapon.value = Number(stones.OneHandedWeapon.value) + 5;
                            stones.HeavyArmor.value = Number(stones.HeavyArmor.value) + 5;
                            stones.TwoHandedWeapon.value = Number(stones.TwoHandedWeapon.value) + 5;
                            stones.Shooting.value = Number(stones.Shooting.value) + 5;
                            stones.Blocking.value = Number(stones.Blocking.value) + 5;
                            break;
                        default:
                            // console.log('default stone');
                            // здесь нужно написать добавление 5 к полям для случая "rogue"
                            chosenStone.innerText = 'Другой';
                            chosenStone.classList.remove('text-danger');
                            chosenStone.classList.add('text-success');
                            break;

                    }
                    lastSelectedStone = radioButton; // сохраняем текущую кнопку в lastSelected
                }
            }
        )
        ;
    });

}