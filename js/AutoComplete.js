/**
 * Created by cnlive-lsf-doc on 2017/2/17.
 */
var autoRead = ["apple", "orange", "banner", "Lemon", "Pear"];
$(document).ready(function () {
    $("#input").autocomplete({
        source: autoRead,
        change: function( event, ui ) {
            console.log(ui);
        }
    });
});

window.onload = function () {
    var input_js = document.getElementById("input_js");
    input_js.addEventListener("input", textChanged);
}

function textChanged() {
    var input_js = document.getElementById("input_js");
    var resultArr = returnCompleteArr(input_js.value);
    var uls = createUl();
    addLi(uls, resultArr);
    document.getElementById("alabel").appendChild(uls);
}

function returnCompleteArr(str) {
    var resultArr = [];
    for(index in autoRead){
        if(autoRead[index].indexOf(str) != -1){
            resultArr.push(autoRead[index]);
        }
    }
    return resultArr;
}

/* 创建<ul></ul> 并返回 */
function createUl() {
    if(judgemntExist("ulmain")){
        var uls = document.createElement("ul");
        uls.id = "ulmain";
        uls.className = "ulJS";
        return uls;
    }
    removeNodeAllChild(getElementID("ulmain"));
    return getElementID("ulmain");
}

/* 创建<li></li>并添加到父节点中 */
function addLi(uls, resultArr) {
    for(index in resultArr){
        var lis = document.createElement("li");
        lis.innerHTML = resultArr[index];
        uls.appendChild(lis);
    }
}

/* 判断当前id是否在页面元素中 */
function judgemntExist(strID) {
    var uls = getElementID(strID);
    if(uls){
        return false;
    }
    return true;
}

/* 删除该节点下的所有子节点 */
function removeNodeAllChild(uls) {
    if(uls.childNodes.length == 0) return;
    for(index in uls.childNodes){
        uls.removeChild(uls.childNodes[0]);
    }
}

/* 根据id获取元素 */
function getElementID(idStr) {
    return document.getElementById(idStr);
}

/* 打印 */
function print(something) {
    console.log(something);
}
