/**
 * Created by wangl on 2017/2/19.
 */

var top_ayaka = document.getElementById('top_ayaka');
var bottom_ayaka = document.getElementById('bottom_ayaka');
var right_balloon = document.getElementById('right_balloon');
/*移除出现动画，添加持续动画*/
//头部彩花
top_ayaka.addEventListener("animationend", function () {
    $("#top_ayaka").removeClass('top_ayaka_appear');
    $("#top_ayaka").addClass("top_ayaka_keep");
});
//底部彩花
bottom_ayaka.addEventListener("animationend", function () {
    $("#bottom_ayaka").removeClass('top_ayaka_appear');
    $("#bottom_ayaka").addClass("bottom_ayaka_keep");
});
//右边气球
right_balloon.addEventListener("animationend", function () {
    $("#right_balloon").removeClass('right_balloon_appear');
    $("#right_balloon").addClass('right_balloon_keep');
});


