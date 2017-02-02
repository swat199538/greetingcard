/**
 * Created by wangl on 2017/2/1.
 */
window.onload = function () {
    //获取元素
    var music = document.getElementById('music_act');
    var audio = document.getElementsByTagName('audio')[0];
    var page1 = document.getElementById('page1');
    var page2 = document.getElementById('page2');
    var page3 = document.getElementById('page3');
    //当音乐停止播放时候，自动停止光盘选择效果
    audio.addEventListener("ended", function (event) {
        music.setAttribute("class", "");
    }, false);

    //点击音乐图标，控制音乐的播放
    music.onclick = function () {
        if (!audio.paused) {
            audio.pause();
            this.setAttribute("class","");
        } else {
            audio.play();
            this.setAttribute("class","play");
        }
    };

    //点击屏幕，自动播放
    page1.addEventListener("touchstart", function () {
        page1.style.display = "none";
        page2.style.display = "block";
        page3.style.display = "block";
        page3.style.top = "100%";
        setTimeout(function () {
            page2.setAttribute("class", "page fadeOut");
            page3.setAttribute("class", "page fadeIn");
        },5500);
    },false);

};