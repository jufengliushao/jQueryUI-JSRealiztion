/**
 * Created by cnlive-lsf-doc on 2017/2/15.
 */
$(document).ready(function () {
    $("#select").selectable({
        selecting: function (event, ui) {
            // console.log(ui.selecting.textContent.indexOf("C"));
            if(ui.selecting.textContent.indexOf("C") == 0){
                $("#answer").html("恭喜你选对了");
            }else {
                $("#answer").html("错啦");
            }
        }
    });
});