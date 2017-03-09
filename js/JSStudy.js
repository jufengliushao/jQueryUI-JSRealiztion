/**
 * Created by cnlive-lsf-doc on 2017/2/27.
 */
window.onload = function () {
    returnElementByID("button").addEventListener("click", arr);
    returnElementByID("dateBtn").addEventListener("click", dateMethod);
    dateSrtting();
}

function arr() {
    var arr = new Array();
    arr.push(1, 2, 3, 4);
    var ar = arr.reduceRight(function () {
        return arguments[0] + arguments[1];
    });
    alert(ar);
}

function dateMethod() {
    var date = new Date("May 25, 2016");
    date = Date.UTC(2017, 2, 30);
    date = Date.now();
    alert(date);
}

function returnElementByID(varID) {
    return document.getElementById(varID);
}

function dateSrtting() {
    var date = new Date();
    returnElementByID("date-string").innerHTML = date.toDateString();
}

var person = {
    color : "red"
}

var study = {
    color : "green"
}

function a2() {
    var color = "blue";
}

function sayColor() {
    alert(this.color);
}

function lla() {
    sayColor.apply(person);
    // alert("aa");
}

function createObject() {
    var person1 = "aaa";
    person1.name = "222";
    console.log(person1.name);
}

function alertTypeof() {
    var o = Number(20);
    var p = new Number(30);
    console.log(typeof o + "=====" + typeof p);
}

function inst() {
    var boolObj = new Boolean();
    console.log(boolObj && true);
}

function toFiex() {
    var x = 1;
    x = x.toFixed(2);
    alert(x);
}

function stringAction() {
    var strObj = new String("hello world");
    console.log(strObj.charAt(2) + "=====" + strObj.charCodeAt(2) + "========" + strObj[2]);
    console.log("slice: " + strObj.slice(2, 7));
    console.log("substr: " + strObj.substr(2, 7));
    console.log("sybstring: " + strObj.substring(2, 7));
}

function math() {
    var values = [3,45,43,99,1,0];
    console.log(Math.max.apply(Math, values));
    console.log(Math.min.apply(Math, values));
    console.log(Math.ceil(29.6));
    console.log(Math.floor(29.6));
    console.log(Math.round(29.6));
}

function random(min, max) {
    var count = (max > min) ? (max - min + 1) : (min - max + 1);
    var minValue = (max > min) ? min : max;
    return Math.floor(Math.random() * count + minValue);
}

function getRandom() {
    console.log(random(3, 3));
}

var shopping = {
    _name: "大润发",
    address: "泗泾",
    sayInfo: function() {
        console.log("name: " + this.name);
        console.log("address: " + this.address);
    }
};

Object.defineProperty(shopping, "name", {
    get: function () {
        return "www";
    },
    set: function () {
        this._name = "aaa";
    }
});

function createObj() {
    shopping.sayInfo();
}

function pere(ag) {
    var per = {
        age: 0
    };
    per.prototype.setAge
    // console.log(per.age);
    return per;
}

function checkObj() {
    console.log(shopping.name);
}