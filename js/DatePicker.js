/**
 * Created by cnlive-lsf-doc on 2017/2/18.
 */
var showMonthBool = true;
var showChangeBool = true;
$(document).ready(function () {
    $("#date").datepicker({
        showOtherMonths: showMonthBool,
        selectOtherMonth: showMonthBool,
        showButtonPanel: true,
        changeMonth: showChangeBool,
        changeYear: showChangeBool,
        numberOfMonths: 3
    });
    $("#showMonth, #change").button({
    });
});

window.onload = function () {
    getElementID("selecter").addEventListener("change", sliderValueChanged);
    getElementID("showMonth").addEventListener("click", showMonthAction);
    getElementID("change").addEventListener("click", changeShow);
};

function sliderValueChanged() {
    $("#date").datepicker("option", "showAnim", this.value);
}

function showMonthAction() {
    showMonthBool = !showMonthBool;
    var text = "显示月份选择按钮";
    if(showMonthBool){
        text = "隐藏月份选择按钮";
    }else {
    }
    getElementID("showMonth").innerHTML = text;
}

function changeShow() {
    showChangeBool = !showChangeBool;
    var text = "显示月份年份选择按钮";
    if (showChangeBool){
        text = "隐藏月份年份选择按钮";
    }
    getElementID("change").innerHTML = text;
    resetDatePicker();
}

function resetDatePicker() {

}

function getElementID(varID) {
    return document.getElementById(varID);
}