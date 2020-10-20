function checkLogon(){
    var name = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    //判断非空
    if((name===null || name==="") || (pass==null || pass==="")){
        alert("用户名或密码不能为空！！");
    }
    else{
        if(name==="啦啦啦" && pass==="123"){
    //这里写你页面跳转的语句
            window.location.href="登录成功.html";
        }
        else{
            alert("用户名或密码错误！！");
        }
    }
}
