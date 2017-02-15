/**
 * Created by cnlive-lsf-doc on 2017/2/15.
 */
var inBig = false;
$(document).ready(function () {
    $("#small_div").draggable({

    });
    $("#big_div").droppable({
        drop: function (event, ui) {
            inBig = true;
            $("#big_p").html('太热了，你走吧');
            setPText();
        },
        out: function (event, ui) {
            inBig = false;
            $("#big_p").html('快到怀里来');
            setPText();
        }
    });
});

function setPText() {
    // document.getElementById("small_p").innerHTML = inBig.toString();
    $("#small_p").html(inBig.toString());
}
