import {allLPTable} from "../main.js";
// для проверки ЛП
export let tenLPOn = true;
export let fifteenLpOn = true;
export let twentyLpOn = true;
export let dynamicLpOn = true;

// выбранный уровень сложности 10 15 20 dynamic
export let tenLP = document.getElementById('tenLP');
export let fifteenLp = document.getElementById('fifteenLp');
export let twentyLp = document.getElementById('twentyLP');
export let dynamicLP = document.getElementById('dynamicLP');

export let needLvlForUp = 0;

// присваивается значение в зависимоти от уровня сложности и потом на него делить
export let needLvlForUpF = document.getElementById('needLvlForUpF');
// выбранный уровень сложности для отображения в модалке расчета
export let chosenLevel = document.getElementById('chosenLevel');


export function tenLpFunc() {

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

export function fifteenLpFunc() {

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

export function twentyLpFunc() {
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

export function dynamicLPFunc() {
    if (dynamicLP) {
        dynamicLpOn = false;
        needLvlForUp = 255;
        twentyLp.classList.add('text-success');
        console.log('dynamic_lp');
        chosenLevel.innerText = 'dynamicLP';
        chosenLevel.classList.remove('text-danger');
        chosenLevel.classList.add('text-success');
    } else if (!twentyLpOn) {
        needLvlForUp = 0;
        twentyLp.classList.remove('text-success');
        twentyLpOn = true;
    }
}

// присваивается значение в зависимоти от уровня сложности и потом на него делить
export function calculate_needed_lvl() {
    switch (needLvlForUp) {
        case 10:
            needLvlForUp = Math.ceil(Number(allLPTable.innerHTML) / Number(needLvlForUp));
            needLvlForUpF.innerHTML = needLvlForUp;
            needLvlForUpF.classList.remove('text-danger');
            needLvlForUpF.classList.add('text-success');
            console.log('10')
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
        case -1:
            needLvlForUp = Math.ceil(Number(allLPTable.innerHTML) / Number(25));
            needLvlForUpF.innerHTML = needLvlForUp;
            needLvlForUpF.classList.remove('text-danger');
            needLvlForUpF.classList.add('text-success');
            console.log('dynamiclp')
            break;
        default:
            needLvlForUp = Math.ceil(Number(allLPTable.innerHTML) / Number(15));
            needLvlForUpF.innerHTML = needLvlForUp;
            needLvlForUpF.classList.remove('text-danger');
            needLvlForUpF.classList.add('text-success');
            console.log('default lp level');
    }
}
