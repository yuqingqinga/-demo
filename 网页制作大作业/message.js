window.onload = random();

var t1 = window.setInterval("random()",3000);
// var count = 0;
var num = Math.floor(Math.random()*10+1);
var time;
function random(){
    for (var i = 0; i < Math.floor(Math.random()*10+1); i++) {
        var w =  window.innerWidth;
        var h =  window.innerHeight;
        var div = document.createElement('div');
        div.style.top = Math.random()*h + "px";
        div.style.left = Math.random()*w + "px";
        div.setAttribute('class','color');
        document.getElementById("body").appendChild(div);
    }

    time = window.setTimeout("del()",2900);
    console.log(time);
}
function del(){
    clearTimeout(time);
    var elements = document.getElementById("body");
    var ele_child = document.querySelectorAll("#body div");
    for (var j = 0; j < ele_child.length; j++) {
        elements.removeChild(ele_child[j]);
    }
}
