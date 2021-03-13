$(document).ready(function() {
    $(".home_page").css({"height":Window_height(),"background-color":"black","color":"white"});
    $(".time").text(Love_time());
    $(".box01").css("height",Window_height()+'px');
    $(".Picture_box section").css("height",Window_height()+'px');
    $(".icon-xiala").click(function(){
        window.scrollTo({ 
            top: window.pageYOffset+Window_height(), 
            behavior: "smooth" 
        });
      });
});
//恋爱时间
function Love_time(){
    var date = new Date('2018-12-9 0:0:0').getTime() / 1000 - parseInt(new Date().getTime() / 1000);
    var timeDay = Math.abs(parseInt(date / 60 / 60 / 24));        //相差天数
    return timeDay;
}
//视口高度
function Window_height(){
    var h = document.documentElement.clientHeight;
    return h;
}
//视口宽度
function Window_width(){
    var w = document.documentElement.clientWidth
    return w;
}