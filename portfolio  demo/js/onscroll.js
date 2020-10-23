// 当页面滚动时,判断并更新滑动条及顶部导航栏的状态
function show(){
    var introOffset = document.getElementById("intro-contain").offsetTop;
    var portOffset =  document.getElementById("pro-contain").offsetTop;
    var contOffset =  document.getElementById("cont-contain").offsetTop;

    var offset = [introOffset,portOffset,contOffset];
    var winOffset = window.pageYOffset;
    if(winOffset < (offset[1]-170) ){
        changeSet(0);
    }else if(winOffset < (offset[2]-170) ){
        changeSet(1);
    }else{
        changeSet(2);
    }

    var progress = document.getElementById("progress-bar");
    var winHeight = document.documentElement.clientHeight;
    var pageHeight = document.body.scrollHeight - winHeight;
    progress.style.width = winOffset/pageHeight * 100 + "%";
}

//改变每个标签的显示状态
function changeSet(num){
    var list = document.getElementById("navigation").children;
    for(var i = 0;i < list.length; i++){
        if(i !== num){
            list[i].classList.remove("current");
        }
    }
    list[num].classList.add("current");
}
