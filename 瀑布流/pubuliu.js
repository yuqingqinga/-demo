window.onload = function () {
    picture();

    //监听滚动事件
    window.document.addEventListener("scroll",function () {
        // document.documentElement.scrollTop: 浏览器滚动部分高度
        // window.screen.height：当前窗口高度
        // document.documentElement.scrollHeight：能滚动的最大高度 浏览器所有内容高度
        if (document.documentElement.scrollTop + window.screen.height > document.documentElement.scrollHeight){
            // 在插入图片
            windowHeight = windowHeight + 500;
            picture();
        }
    });
};

// 屏幕默认大小，初始化图片占用页面大小
var windowHeight = window.screen.height + 500;

var imgId = 0;

// 自动加载图片
function picture() {
    var inter = setInterval(function(){
        if (document.documentElement.scrollHeight > windowHeight) {
            clearInterval(inter);
        } // 达到预期的高度，停止加载

        var mDiv = minDiv();
        // 插入图片
        imgId++;
        if(imgId > 27){
            imgId = 1;
        }
        var img = document.createElement("img");
        img.setAttribute("src","img/"+imgId+".JPG");
        mDiv.appendChild(img);
    },100);
}


// 找到高度最小的div
function minDiv() {
    var pb1 = document.getElementById("pubu-01");
    var pb2 = document.getElementById("pubu-02");
    var pb3 = document.getElementById("pubu-03");
    var pb4 = document.getElementById("pubu-04");

    var pbImgs_1 = pb1.children;
    var pbImgs_2 = pb2.children;
    var pbImgs_3 = pb3.children;
    var pbImgs_4 = pb4.children;

    var pb1Height = jisuan(pbImgs_1);
    var pb2Height = jisuan(pbImgs_2);
    var pb3Height = jisuan(pbImgs_3);
    var pb4Height = jisuan(pbImgs_4);

    // 找到高度最小的div
    var minHeight = Math.min(pb1Height,pb2Height,pb3Height,pb4Height);

    if (minHeight === pb1Height){
        return pb1;
    }
    if (minHeight === pb2Height){
        return pb2;
    }
    if (minHeight === pb3Height){
        return pb3;
    }
    if (minHeight === pb4Height){
        return pb4;
    }
}

// 计算每个div的高度
function jisuan(pbImgs) {
    if (pbImgs === 0 || pbImgs.length === 0 ) {
        return 0;
    }
    else {
        var height = 0;
        // 获取当前每列的图片
        for(var i = 0;i < pbImgs.length; i++){
            var img = pbImgs[i];
            var h = img.height;
            height = height + h;
        }
        return  height;
    }
}