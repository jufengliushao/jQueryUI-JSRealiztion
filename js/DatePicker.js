/**
 * Created by cnlive-lsf-doc on 2017/2/18.
 */
var showMonthBool = false;
var showChangeBool = false;
$(document).ready(function () {
    $("#date").datepicker({
        showOtherMonths: showMonthBool,
        selectOtherMonth: showMonthBool,
        showButtonPanel: true,
        changeMonth: showChangeBool,
        changeYear: showChangeBool,
    });
    $("#showMonth, #change").button({
    });
});

window.onload = function () {
    getElementID("selecter").addEventListener("change", sliderValueChanged);
    getElementID("showMonth").addEventListener("click", showMonthAction);
    getElementID("change").addEventListener("click", changeShow);
    getElementID("format").addEventListener("change", showFormatChange);
    getElementID("numberMonths").addEventListener("change", showMonthNumberChange);
};

function sliderValueChanged() {
    $("#date").datepicker("option", "showAnim", this.value);
}

function showFormatChange() {
    $("#date").datepicker("option", "dateFormat", this.value);
}

function showMonthNumberChange() {
    $("#date").datepicker("option", "numberOfMonths", parseInt(this.value));
}

function showMonthAction() {
    showMonthBool = !showMonthBool;
    var text = "显示月份选择按钮";
    if(showMonthBool){
        text = "隐藏月份选择按钮";
    }else {
    }
    getElementID("showMonth").innerHTML = text;
    $("#date").datepicker("option", "showOtherMonths", showMonthBool);
    $("#date").datepicker("option", "selectOtherMonth", showMonthBool);
}

function changeShow() {
    showChangeBool = !showChangeBool;
    var text = "显示月份年份选择按钮";
    if (showChangeBool){
        text = "隐藏月份年份选择按钮";
    }
    getElementID("change").innerHTML = text;
    $("#date").datepicker("option", "changeMonth", showChangeBool);
    $("#date").datepicker("option", "changeYear", showChangeBool);
}

function resetDatePicker() {

}

function getElementID(varID) {
    return document.getElementById(varID);
}