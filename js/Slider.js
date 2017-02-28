/**
 * Created by cnlive-lsf-doc on 2017/2/28.
 */
$(document).ready(function () {
    $("#slider-default").slider({
        change: valueChanged,
        slide: valueChanging
    });
});

function valueChanged(event, ui) {
    $("#currentRate").html(ui.value);
}

function valueChanging(event, ui) {
    $("#currentRate").html(ui.value);
}