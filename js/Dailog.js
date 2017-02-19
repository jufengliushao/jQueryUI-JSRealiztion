/**
 * Created by cnlive-lsf-doc on 2017/2/19.
 */
$(document).ready(function () {
    $("#showDig").button().on("click", showDailog);
});

function showDailog() {
    $("#dailog_div").dialog();
}