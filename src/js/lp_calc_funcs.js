import {allLPTable, chosenStone} from "../main.js";


// выбранный уровень сложности 10 15 20 dynamic
// export let tenLP = document.getElementById('tenLP');
// export let fifteenLp = document.getElementById('fifteenLp');
// export let twentyLp = document.getElementById('twentyLP');
// export let dynamicLP = document.getElementById('dynamicLP');

export let needLvlForUp = 0;

// присваивается значение в зависимоти от уровня сложности и потом на него делить
export let needLvlForUpF = document.getElementById('needLvlForUpF');
// выбранный уровень сложности для отображения в модалке расчета
export let chosenLevel = document.getElementById('chosenLevel');


// Получаем ссылки на элементы radio button
const radio1 = document.getElementById('tenLP');
const radio2 = document.getElementById('fifteenLp');
const radio3 = document.getElementById('twentyLP');

// Обработчик события изменения состояния radio button
function handleRadioChange() {
    const lpSetting = getLPSetting()

    needLvlForUp = Math.ceil(Number(allLPTable.innerHTML) / lpSetting);
    if (needLvlForUp > 0) {
        if (chosenStone.innerText === 'Ученик') {
            chosenLevel.innerText = String(`${lpSetting - 1}LP`);

        } else {
            chosenLevel.innerText = String(`${lpSetting}LP`);
        }
        chosenLevel.classList.remove('text-danger');
        chosenLevel.classList.add('text-success');
    }
    if (needLvlForUp > 0) {
        needLvlForUpF.innerHTML = needLvlForUp;
        needLvlForUpF.classList.remove('text-danger');
        needLvlForUpF.classList.add('text-success');
    }
}

function getLPSetting() {
    const base = chosenStone.innerText === "Ученик" ? 1 : 0;
    switch (true) {
        case radio1.checked:
            return base + 10;
        case radio2.checked:
            return base + 15;
        case radio3.checked:
            return base + 20;
        default:
            return base + 15;
    }
}

// Добавляем обработчик события изменения состояния для каждого radio button
radio1.addEventListener('change', handleRadioChange);
radio2.addEventListener('change', handleRadioChange);
radio3.addEventListener('change', handleRadioChange);

// присваивается значение в зависимоти от уровня сложности и потом на него делить
export function calculate_needed_lvl() {
    handleRadioChange();
}
