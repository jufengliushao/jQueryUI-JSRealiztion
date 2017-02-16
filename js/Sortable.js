/**
 * Created by cnlive-lsf-doc on 2017/2/16.
 */
$(document).ready(function () {
    $("#friut, #empty, #dog").sortable({
        stop: function (event, ui) {
            console.log("------stop-------");
            console.log(ui);
            console.log("------stop-------");
        },
        update: function (event, ui) {
            console.log("------update-------");
            console.log(ui);
            console.log("------update-------");
        },
        start: function (event, ui) {
            console.log("------start-------");
            console.log(ui);
            console.log("------start-------");
        },
        placeholder: "ui-state-highlight",
        connectWith: "ul"
    });
});