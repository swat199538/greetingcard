/**
 * Created by wangl on 2017/3/2.
 */
var contents = document.getElementById('font1').innerHTML;
document.getElementById('font1').innerHTML="";
var max = contents.length;
var index=0;
function display_word(content) {
    if (index<max){
        var old_font = document.getElementById('font1').innerHTML;
        document.getElementById('font1').innerHTML= old_font+content[index]
        index++;
        console.log('执行了！');
    } else {

    }
}
setInterval("display_word(contents)", 1000);
