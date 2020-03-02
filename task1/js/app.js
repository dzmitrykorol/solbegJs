let totalZombies = 0;
let deadZombies = 0;
let smallZombies = 0;
let madZombies = 0;
let strongZombies = 0;

const totalSelector = document.querySelector('.total-zombies');
const deadSelector = document.querySelector('.dead-zombies');
const smallSelector = document.querySelector('.small-zombies');
const madSelector = document.querySelector('.mad-zombies');
const strongSelector = document.querySelector('.strong-zombies');

for (const i in zombiesData) {
    const currentZombie = zombiesData[i];
    const isNumber = !isNaN(currentZombie);
    const isDead = !isNumber || currentZombie < 1;
    const isSmall = isNumber && (currentZombie > 0 && currentZombie < 11);
    const isMad = isNumber && (currentZombie > 10 && currentZombie < 21);
    const isStrong = isNumber && currentZombie > 20;

    if (isDead) {
        deadZombies++;
    } else if (isSmall) {
        smallZombies++;
    } else if (isMad) {
        madZombies++;
    } else if (isStrong) {
        strongZombies++;
    }

    totalZombies++;
}

const total = `${totalSelector.textContent} {${totalZombies}}`;
const dead = `${deadSelector.textContent} {${deadZombies}}`;
const small = `${smallSelector.textContent} {${smallZombies}}`;
const mad = `${madSelector.textContent} {${madZombies}}`;
const strong = `${strongSelector.textContent} {${strongZombies}}`;

totalSelector.textContent = total;
deadSelector.textContent = dead;
smallSelector.textContent = small;
madSelector.textContent = mad;
strongSelector.textContent = strong;

console.log(document.getElementsByTagName('body')[0].innerText);