let zombieTypes = {
    dead: [],
    small: [],
    mad: [],
    strong: [],
};
zombiesData.forEach(function(item) {
    switch(typeof item) {
        case 'number':
            if (item > 0 && item < 11) {
                zombieTypes.small.push(item);
            } else if (item > 10 && item < 21) {
                zombieTypes.mad.push(item);
            } else if (item > 20) {
                zombieTypes.strong.push(item);
            } else {
                zombieTypes.dead.push(item);
            }
            break;
        default:
            zombieTypes.dead.push(item);
            break;
    }
});

formatResult(zombiesData, '.total-zombies');
insertResult(zombieTypes, 'dead', '.dead-zombies');
insertResult(zombieTypes, 'small', '.small-zombies');
insertResult(zombieTypes, 'mad', '.mad-zombies');
insertResult(zombieTypes, 'strong', '.strong-zombies');

document.addEventListener("DOMContentLoaded", function(){
    let pageContent = document.getElementsByTagName('body');
    console.log(pageContent[0].outerText);
});

function insertResult(zombieTypes, zombieType, zombieSelector) {
    let totalZombieInType =  countProperties(zombieTypes[zombieType]);
    let zombiesSelector = document.querySelector(zombieSelector);
    let inserter = document.createTextNode("{"+ totalZombieInType +"}");

    zombiesSelector.appendChild(inserter);
}

function formatResult(zombiesData, querySelector) {
    let totalZombieNumber = Object.keys(zombiesData).length;
    let totalZombies = document.querySelector(querySelector);
    let number = document.createTextNode("{"+ totalZombieNumber +"}");

    return totalZombies.appendChild(number);
}

function countProperties(obj) {
    let count = 0;
    for(let prop in obj) {
        if(obj.hasOwnProperty(prop))
            count++;
    }

    return count;
}