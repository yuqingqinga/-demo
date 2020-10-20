let count = 1;

function show(event)
{

    var  div = document.getElementsByClassName('content')[0];
    var div1 = document.createElement('div');
    div1.setAttribute('class','cont');
    div.appendChild(div1);
    var note = document.createElement('span');
    var number = document.createElement('span');
    div1.appendChild(note);
    div1.appendChild(number);
    number.setAttribute('class','paixu');
    var a = document.createElement('a');
    a.setAttribute('href','#');
    a.setAttribute("class","symbol")
    div1.appendChild(a);
    var div2 = document.createElement('div');
    div1.appendChild(div2);
    div2.setAttribute('class','line');
    var p = document.createElement('p');
    div1.appendChild(p);
    note.innerHTML = 'note';
    number.innerHTML = count;
    count++;
    a.innerHTML = 'X';
    var input = document.getElementById('inp').value;
    p.innerHTML = input;

    a.onclick = function (){

        div1.remove();
        count--;
        var num =  document.getElementsByClassName('cont').length;
        // console.log(num);
        var shunxu = document.getElementsByClassName('paixu');
        for (var i = 0; i < num; i++)
        {
            shunxu[i].innerText = i+1;
            // console.log(shunxu[i]);
        }
    }

}