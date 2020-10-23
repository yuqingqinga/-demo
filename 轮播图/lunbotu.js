window.onload = function () {

  mouseTime(); //鼠标
  goClick();//下标
};

var items = document.getElementsByClassName("item");
var points = document.getElementsByClassName("point")

var index = 0;
var time = null;
//轮播之后清除样式
function clearIndex(){
    for (var i = 0;i < items.length;i++) {
        items[i].className = 'item';
    }
    for (var i = 0;i < items.length;i++) {
        points[i].className = 'point';
    }
}
//图片轮播
function goIndex() {
    clearIndex();
    items[index].className = 'item active';
    points[index].className = 'point current';
}
//右键
function goNext(){
    index++;
    if (index > items.length -1) {
        index = 0
    }
    goIndex();
}
//左键
function goPre() {
    if (index === 0){
        index = items.length;
    }
    index--;
    goIndex();
}
//鼠标放在下标 进行跳转
function goClick() {
    for (var i = 0;i < points.length; i++){
        points[i].addEventListener('mouseover',function () {
            index = this.getAttribute('index');
            goIndex();
        })
    }
}

//鼠标设置定时器
function mouseTime() {
    //设置定时器
    time = setInterval(goNext,2000)

    var inner = document.getElementsByClassName('inner')[0];

    inner.onmouseover = function (){
        clearInterval(time);
    };


    inner.onmouseout = function () {
        time = setInterval(goNext,2000)
    };

}

