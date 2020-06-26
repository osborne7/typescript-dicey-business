"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// let button = document.getElementById('generate-die');
// let container = document.getElementById('container');
// let rollButton = document.getElementById('roll-die');
var jquery_1 = __importDefault(require("jquery"));
var container = jquery_1.default('#container');
var newVal;
var Die = /** @class */ (function () {
    function Die() {
        var _this = this;
        this.roll = function () {
            var newVal = _this.randomNumber;
            var die = jquery_1.default('.die');
            console.log(newVal);
            jquery_1.default(die).html(newVal.toString());
            // this.div.innerHTML = newVal;
            container.append(jquery_1.default(die));
            // container.appendChild(this.div);
            // return newVal;
        };
        this.randomNumber = Math.floor(Math.random() * Math.floor((6 - 1) + 1));
        this.div = jquery_1.default('<div class="die"></div>');
        this.roll();
    }
    return Die;
}());
var allDie = /** @class */ (function (_super) {
    __extends(allDie, _super);
    function allDie() {
        var _this = _super.call(this) || this;
        _this.roll = function () {
            // this.div = $('<div class="die"></div>');
            var $allDie = jquery_1.default('.die');
            // this.div = document.getElementsByClassName('die');
            for (var i = 0; i < allDie.length; i++) {
                // $allDie[i].text(this.randomNumber);
                _this.div.text(_this.randomNumber);
            }
        };
        _this.roll();
        return _this;
    }
    return allDie;
}(Die));
jquery_1.default("#generate-die").click(function () {
    new Die();
});
jquery_1.default("#roll-die").click(function () {
    new allDie();
});
