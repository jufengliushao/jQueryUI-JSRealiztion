/**
 * Created by cnlive-lsf-doc on 2017/2/19.
 */
$(document).ready(function () {
    $("#showDig").button().on("click", showDailog);
    $("#dialog_model").button().on("click", showDialogModel);
    $("#dialog_button").button().on("click", showDialogButton);
    $("#dailog_div, #dialog_div_model, #dialog_div_button").dialog({
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

function showDialogButton() {
    $("#dialog_div_button").dialog({
        modal: true,
        buttons: {
            "confirm": function () {
                $(this).dialog("close");
            },
            "cancel": function () {
                $(this).dialog("close");
            }
        }
    });
    $("#dialog_div_button").dialog("open");
}