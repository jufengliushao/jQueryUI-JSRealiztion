/**
 * Created by cnlive-lsf-doc on 2017/2/15.
 */
$(document).ready(function () {
    $("#small_div").draggable();
    $("#big_div").droppable({
        drop: function (event, ui) {

        }
    });
});