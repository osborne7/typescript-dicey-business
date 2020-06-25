// let button = document.getElementById('generate-die');
let container = document.getElementById('container');
let newVal;
// let rollButton = document.getElementById('roll-die');
import $ from 'jquery';

class Die {
    constructor() {
        this.div = document.createElement('div');
        this.div.className = 'die';
        this.roll();
    }
    roll = () => {
        let newVal = this.randomNumber();
        console.log(newVal);
        this.div.innerHTML = newVal;
        container.appendChild(this.div);
        // return newVal;
    }
    randomNumber = () => Math.floor(Math.random() * Math.floor((6-1) + 1));
}

class allDie extends Die {
    constructor() {
        super();
        this.roll();
    }
    roll = () => {
        this.div = document.getElementsByClassName('die');
        for (let i = 0; i<this.div.length; i++) {
            this.div[i].innerHTML = this.randomNumber();
            }
    }
}

$("#generate-die").click(() => {
    new Die();
})

$("#roll-die").click(() => {
    new allDie();
})