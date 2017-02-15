/**
 * Created by cnlive-lsf-doc on 2017/2/15.
 */
$(document).ready(function () {
    $("#jq_div").resizable();
    document.onmousemove = function (ev) {
        judgementMouse(ev);
    };
});

function judgementMouse(ev) {
    var jsDiv = document.getElementById("js_div");
    var left = jsDiv.offsetLeft;
    var top = jsDiv.offsetTop;
    var height = jsDiv.clientHeight;
    var width = jsDiv.clientWidth;
    console.log(ev);
    if( ev.offsetY >= top + height - 50 && ev.offsetY <= top + height + 50){
        jsDiv.className = 'js_sourth';
        return;
    }
    if( ev.offsetX >= left + width - 20 && ev.offsetX <= left + width + 20 && ev.offsetY >= top + height - 20 && ev.offsetY <= top + height + 20){
        jsDiv.className = 'js_se';
        return;
    }
    if(ev.offsetX >= left + width - 20 && ev.offsetX <= left + width + 20){
        jsDiv.className = 'js_east';
        return;
    }
    jsDiv.className = 'js_none';
}