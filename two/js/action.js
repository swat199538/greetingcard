/**
 * Created by wangl on 2017/2/19.
 */

var top_ayaka = document.getElementById('top_ayaka');
var bottom_ayaka = document.getElementById('bottom_ayaka');
/*移除出现动画，添加持续动画*/
top_ayaka.addEventListener("animationend", function () {
    $("#top_ayaka").removeClass('top_ayaka_appear');
    $("#top_ayaka").addClass("top_ayaka_keep");
});
bottom_ayaka.addEventListener("animationend", function () {
    $("#bottom_ayaka").removeClass('top_ayaka_appear');
    $("#bottom_ayaka").addClass("bottom_ayaka_keep");
});


