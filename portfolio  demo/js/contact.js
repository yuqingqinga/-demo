function getInputfirst(ele){

    var value = ele.value;

    var tipDiv = document.getElementsByClassName("input-tip");


    if(value === ""){
        tipDiv[0].setAttribute("class","input-tip");
    }
    else {
        tipDiv[0].setAttribute("class","input-tip inputing");
    }

}

function getInputsecond(ele) {
    var value = ele.value;

    var tipDiv = document.getElementsByClassName("input-tip");

    if(value === ""){
        tipDiv[1].setAttribute("class","input-tip");
    }
    else {
        tipDiv[1].setAttribute("class","input-tip inputing");
    }

}
