let output = 0.0;
let flag = 0;

function number(num){
    let userI = document.getElementById("userInp");
    if(num != 10){
        userI.value += num;
    }
    else{
        userI.value = userI.value+ ".";
    }
    console.log(userI.value);
}

function action(num){
    let userI = document.getElementById("userInp");
    let some = parseFloat(userI.value);
    userI.value = null;
    
    if(flag == 1){
        output = output + some;
    }
    if(flag == 2){
        output -= some;
    }
    if(flag == 3){
        output = output*some;
    }
    if(flag == 4){
        output = output/some;
    }
    if(flag == 0){
        output = some;
    }
    console.log("hello" + some);
    console.log("output" + output);
    flag = num;
}

function equal(flag1){
    let userI = document.getElementById("userInp");
    let hel = parseFloat(userI.value);
    let out = parseFloat(output);
    if(flag1 == 0){
        userI.value = 0;
    }
    if(flag1 == 1){
        userI.value = out + hel;
    }
    if(flag1 == 2){
        userI.value = out - hel;
    }
    if(flag1 == 3){
        userI.value = out * hel;
    }
    if(flag1 == 4){
        userI.value = out / hel;
    }
    flag = 0;
    output = userI.value;
    console.log("aoutput" + output);
}