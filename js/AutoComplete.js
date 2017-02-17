/**
 * Created by cnlive-lsf-doc on 2017/2/17.
 */
var autoRead = ["apple", "orange", "banner", "Lemon", "Pear"];
$(document).ready(function () {

    $("#input").autocomplete({
        source: autoRead
    });
});