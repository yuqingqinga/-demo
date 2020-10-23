var canvas =  document.querySelector(".bubble");
var w,h;   //获取浏览器的宽高；
var aColor = ['#1db0b8','#de8b00','#3b200c','#ff534d','#edd0be'];  //小球的颜色
var aBubble = [];    //存放小球
(function setSize() {                      //立即执行函数，监听浏览器宽高是否会发生改变
    window.onresize = arguments.callee;    //给该函数绑定了一个事件   callee是arguments对象的一个属性,它可以用于引用该函数的函数体内当前正在执行的函数
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;
})();

var canCon = canvas.getContext("2d"); //获取canvas上可以绘制的区域；

function random(min,max) {
    return Math.random()*(max-min)+min;        //返回一个最小数到最大数之间的数
}

function Bubble() {}
Bubble.prototype = {            //prototype 属性使您有能力向对象添加属性和方法。
    init:function () {
        this.x = random(0,w);            //小球的圆心x的位置；
        this.y = random(0,h);           //小球的圆心y的位置；
        this.r = random(2,4);           //小球的半径;
        this.color = aColor[Math.floor(random(0,5))];      //math.floor:小于等于 x，且与 x 最接近的整数。
        this.vx = random(-2,2);
        this.vy = random(-2,2);
    },
    draw:function () {
        canCon.beginPath();              //丢弃任何当前定义的路径并且开始一条新的路径。
        canCon.fillStyle = this.color;   //用于设置填充颜色
        canCon.arc(this.x,this.y,this.r,0,Math.PI*2);  //创建一个圆形；圆心的位置x,y;半径r，从0度转到360度(弧度制)
        canCon.fill();   //fill() 方法填充当前的图像（路径）
    },
    move:function () {
        this.x+= this.vx ;
        this.y+=this.vy;
        //碰撞算法：碰到左边：x-r<0；碰到右边：x+r>w; 同理可得y轴；
        if (this.x-this.r<0||this.x+this.r>w){
            this.vx = -this.vx;
        }
        if (this.y-this.r<0||this.y+this.r>h){
            this.vy = -this.vy;
        }
        this.draw();
    }
};

function create(num) {
    for(var i = 0;i < num;i++){
        var bubble = new Bubble();
        bubble.init();
        bubble.draw();
        aBubble.push(bubble);
    }
}
create(600);
setInterval(function () {
    canCon.clearRect(0,0,w,h);  //清除图形区域 矩形区域(矩形的左上角坐标 宽高)
    for(var itme of aBubble){         //for of 遍历的为数组里的元素；for in遍历的为数组里的下标；
        itme.move();
    }
},1000/60);  //1s60帧；