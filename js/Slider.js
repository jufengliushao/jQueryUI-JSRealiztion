/**
 * Created by cnlive-lsf-doc on 2017/2/28.
 */
$(document).ready(function () {
    $("#slider-default").slider({
        change: valueChanged,
        slide: valueChanging
    });
    $(".color-slder").slider({
        slide:colorChanging,
        value: 1,
        max: 255,
        range: "min"
    });
    $("#voice-div>span").each(function () {
        var valuew = parseInt($(this).text(), 10);
        $(this).empty().slider({
            value: valuew,
            orientation:"vertical",
            animate: true,
            max: 100,
            range: "min"
        });
    });
});

function valueChanged(event, ui) {
    $("#currentRate").html(ui.value);
}

function valueChanging(event, ui) {
    $("#currentRate").html(ui.value);
}

function colorChanging(event, ui) {
    resetColor();
}

function resetColor() {
    var red = $("#red-color-slider").slider("value"),
        green = $("#green-color-slider").slider("value"),
        blue = $("#blue-color-slider").slider("value");
    var color = colorRGB(red, green, blue);
    $("#color-showView").css("background-color", "#"+color);
}

function colorRGB(r, g, b) {
    var arr_16 = [
        r.toString(16),
        g.toString(16),
        b.toString(16)
    ];
    arr_16.every(function (item) {
       if(item.length === 1) return "0"+item;
       return item;
    });
    return arr_16.join("").toUpperCase();
}