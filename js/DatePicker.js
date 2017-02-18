/**
 * Created by cnlive-lsf-doc on 2017/2/18.
 */
$(document).ready(function () {
    $("#date").datepicker();
});

window.onload = function () {
    document.getElementById("selecter").addEventListener("change", sliderValueChanged);
};

function sliderValueChanged() {
    console.log(this.value);
}