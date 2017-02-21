/**
 * Created by cnlive-lsf-doc on 2017/2/21.
 */
var current = 0;
$(document).ready(function () {
    $("#progressbar").progressbar({
        value: current,
        max: 100,
        change: changeValue,
        complete: valueComplete
    });
    $("#btn").button();
    $("#btn").on("click", addCurrent);
});

function changeValue() {
    $(".progress-label").html($("#progressbar").progressbar("value")+"%");
}

function valueComplete() {
    $(".progress-label").html("加载完成")
}

function addCurrent() {
    current += 50;
    $("#progressbar").progressbar({
        value: current
    });
}