/**
 * Created by cnlive-lsf-doc on 2017/2/27.
 */
window.onload = function () {
    returnElementByID("button").addEventListener("click", arr);
    returnElementByID("dateBtn").addEventListener("click", dateMethod);
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