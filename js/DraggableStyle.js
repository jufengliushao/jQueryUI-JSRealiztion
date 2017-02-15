/**
 * Created by cnlive-lsf-doc on 2017/2/14.
 */
$(document).ready(function () {
    $("#jQ_div").draggable();
    var div_js = document.getElementById("js_div");
    div_js.onmousedown = function (event) {
        jsDIVMouseMove(event, div_js);
    };
});

function jsDIVMouseMove(event, div_js) {
    var e = event || window.event;
    var diffX = e.clientX - div_js.offsetLeft;
    var diffY = e.clientY - div_js.offsetTop;
    if(typeof div_js.setCapture!='undefined'){
        drag.setCapture();
    }
    div_js.onmouseup = function () {
        // 松开鼠标
        resetMouseUp(div_js);
    };
    document.onmousemove = function (ev) {
        var e = ev || window.event;
        var disX = e.clientX - diffX;
        var disY = e.clientY - diffY;
        setStyle(div_js, disX, disY);
   };
}

function resetMouseUp(div_js) {
    document.onmousemove = null;
    document.onmouseup = null;
    if(typeof div_js.releaseCapture != 'undefined'){
        div_js.releaseCapture();
    }
}

function setStyle(div_js, diffX, diffY) {
    div_js.style.left = diffX + "px";
    div_js.style.top = diffY + "px";
}