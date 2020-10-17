
function change(a){
    delet();
    a.setAttribute("id","select");
}


function delet(qualifiedName){
    var green = document.getElementById('select');
    green.removeAttribute('id', "select");
}

function appear(iconF){
    var menubarFirst = document.getElementsByClassName('menubar-first')[0];
    var menubarSecond = document.getElementsByClassName('menubar-second')[0];
    menubarFirst.style.display = "none";
    menubarSecond.style.display = 'block';
    menubarSecond.style.animation = 'scaleDraw-S 0.3s ease';
}


function disappear(iconS){
    var menubarFirst = document.getElementsByClassName('menubar-first')[0];
    var menubarSecond = document.getElementsByClassName('menubar-second')[0];
    menubarSecond.style.animation = 'scaleDraw-F 0.2s linear';
    menubarSecond.style.transition = 'all 0.2s';
    setTimeout(function () {
        menubarFirst.style.display = "block";
        menubarSecond.style.display = 'none';
        console.log("123");
    },200);
}
