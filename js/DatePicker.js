/**
 * Created by cnlive-lsf-doc on 2017/2/18.
 */
var showMonthBool = false;
$(document).ready(function () {
    $("#date").datepicker({
        showOtherMonths: showMonthBool,
        selectOtherMonth: showMonthBool
    });
    $("#showMonth").button({
    });
});

window.onload = function () {
    getElementID("selecter").addEventListener("change", sliderValueChanged);
    getElementID("showMonth").addEventListener("click", showMonthAction);
};

function sliderValueChanged() {
    $("#date").datepicker("option", "showAnim", this.value);
}

function showMonthAction() {
    showMonthBool = !showMonthBool;
    var text = "显示月份选择按钮";
    if(showMonthBool){
        text = "隐藏月份选择按钮";
    }
    getElementID("showMonth").innerHTML = text;
}

function getElementID(varID) {
    return document.getElementById(varID);
}