/**
 * Created by cnlive-lsf-doc on 2017/2/19.
 */
var namea = document.getElementById("name");
var password = returnElementByID("password");
var eMail = returnElementByID("e-mail");
var tips = returnElementByClass("tips");

$(document).ready(function () {
    $("#showDig").button().on("click", showDailog);
    $("#dialog_model").button().on("click", showDialogModel);
    $("#dialog_buttaon").button().on("click", showDialogButton);
    $("#table-button").button().on("click", addUserDialog);
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
    $("#dialog_input_div").dialog({
        modal: true,
        autoOpen: false,
        height: 300,
        width: 300,
        buttons: {
            "创建": createUser,
            "取消": cancelCreateUser
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

function addUserDialog() {
    $("#dialog_input_div").dialog("open");
}

function createUser() {
    var status = true;
    status = status && checkLength(document.getElementById("name"), 3, 10);
    status = status && checkLength(document.getElementById("e-mail"), 2, 10);
    status = status && checkLength(document.getElementById("password"), 6, 12);

}

function checkLength(target, min, max) {
    if(target.value.length < min || target.value.length > max){
        $(".tips").html(target.title + "长度必须在" + min.toString() + "~" + max.toString() + "之间！");
        return false;
    }
    $(".tips").html("");
    return true;
}

function cancelCreateUser() {
    $(this).dialog("close");
}

function returnElementByID(varID) {
    return document.getElementById(varID);
}

function returnElementByClass(varClass) {
    return $("."+varClass);
}