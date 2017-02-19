/**
 * Created by cnlive-lsf-doc on 2017/2/19.
 */
$(document).ready(function () {
    $("#showDig").button().on("click", showDailog);
    $("#dailog_div").dialog({
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