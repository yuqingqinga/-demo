var count = 1;
function show(){
    var content = document.getElementsByClassName("content")[0];
    var div = document.createElement('div');
    content.appendChild(div);
    div.setAttribute('class','cont');

    var note = document.createElement('span');
    var number = document.createElement('span');
    div.appendChild(note);
    div.appendChild(number);
    number.setAttribute('class','number');
    note.innerHTML = 'note';
    number.innerHTML = count;
    count++;

    var a = document.createElement('a');
    a.setAttribute('href','#');
    a.setAttribute('onclick','delet(this)');
    div.appendChild(a);
    a.innerHTML = 'X';

    var line = document.createElement('div');
    div.appendChild(line);
    line.setAttribute('class','line');

    var p = document.createElement('p');
    div.appendChild(p);ct
    var input = document.getElementById('inp');
    p.innerHTML = input.value;
}

function delet(a){
    var div = a.parentNode;
    var content = div.parentNode;
    content.removeChild(div);
    count--;
    var  num = document.getElementsByClassName('cont').length;
    var order = document.getElementsByClassName('number');
    for (var i = 0 ;i < num; i++){
        order[i].innerHTML = i+1;
    }
}