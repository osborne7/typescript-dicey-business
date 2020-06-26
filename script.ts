// let button = document.getElementById('generate-die');
// let container = document.getElementById('container');
// let rollButton = document.getElementById('roll-die');
import $ from 'jquery';

let container = $('#container');
let newVal;


class Die {
    // div: JQuery<HTMLDivElement>;
    // container!: HTMLDivElement;
    // public randomNumber: number;
    public div: JQuery<HTMLDivElement>
    constructor() {
        this.div = $('<div class="die"></div>');
        this.roll();
    }
    roll = () => {
        let newVal = this.randomNumber;
        let die = $('.die');
        console.log(newVal);
        $(die).html(newVal.toString());
        // this.div.innerHTML = newVal;
        container.append($(die));
        // container.appendChild(this.div);
        // return newVal;
    }
    public randomNumber = Math.floor(Math.random() * Math.floor((6-1) + 1));
}

class allDie extends Die {
    constructor() {
        super();
        
        
        this.roll();
    }
    roll = () => {
        // this.div = $('<div class="die"></div>');

        let $allDie = $('.die');
        // this.div = document.getElementsByClassName('die');
        for (let i = 0; i<allDie.length; i++) {
            // $allDie[i].text(this.randomNumber);
            this.div.text(this.randomNumber);
            }
    }
}

$("#generate-die").click(() => {
    new Die();
})

$("#roll-die").click(() => {
    new allDie();
})