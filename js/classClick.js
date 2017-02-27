/**
 * Created by cnlive-lsf-doc on 2017/2/23.
 */
$(document).ready(function () {
    $(".lll").on("click", clickAction);
});

function clickAction() {
    alert(this.innerHTML);
}