/**
 * Created by cnlive-lsf-doc on 2017/2/19.
 */
$(document).ready(function () {
    $("#showDig").button().on("click", showDailog);
    $("#dialog_model").button().on("click", showDialogModel);
    $("#dailog_div, #dialog_div_model").dialog({
        autoOpen: false,
        show: {
            effect: "blind",
            duration: 1000
        },
        hide: {
            effect: "explode",
            duration: 1000
        }
    });
});

function showDailog() {
    $("#dailog_div").dialog("open");
}

function showDialogModel() {
    $("#dialog_div_model").dialog({
        modal: true
    });
    $("#dialog_div_model").dialog("open");
}