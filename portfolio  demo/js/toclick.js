function toclick1() {
    var list2 = document.getElementById("part2");
    var list1 = document.getElementById("part1");
    var list3 = document.getElementById("part3");
    list2.classList.remove('current');
    list3.classList.remove("current");
    list1.setAttribute("class","current");
}


function toclick2() {
    var list2 = document.getElementById("part2");
    var list1 = document.getElementById("part1");
    var list3 = document.getElementById("part3");

    list1.classList.remove('current');
    list3.classList.remove("current");
    list2.setAttribute("class","current");
}

function toclick3() {
    var list3 = document.getElementById("part3");
    var list1 = document.getElementById("part1");
    var list2 = document.getElementById("part2");
    list1.classList.remove('current');
    list2.classList.remove('current');
    list3.setAttribute("class","current");
}