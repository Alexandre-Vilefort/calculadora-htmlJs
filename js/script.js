var num1;
var control, operat, equalv, dispopt;
var num2, res;

control = 1;
num1 = "init";
equalv = 0;

function equalreset() {
    numb_id = "";
    document.getElementById("disp").innerHTML = "";
    document.getElementById("calc").innerHTML = "";
    res = "";
    num1 = "init";
    num2 = "";
    equalv = 0;
    operat = "";
    dispopt= "";
}

function numpress(numb_id) {
    let calcdisp;
    num2 = document.getElementById("disp").value;

    if (equalv == 1 && numb_id != "equal") {
        document.getElementById("calc").innerHTML = "";
        num1 = "init";
    } else if (equalv == 1 && numb_id == "equal") {
        document.getElementById("calc").innerHTML = num2 + dispopt + num1;    
    }

    if (numb_id === "C") {
        numb_id = "";
        document.getElementById("disp").innerHTML = "";
        document.getElementById("calc").innerHTML = "";
        res = "";
        num1 = "init";
        num2 = "";
        equalv = 0;
        operat = "";
        dispopt= "";
    } else if (numb_id === "plusmn") {
        num2 = -1 * Number(num2);
        document.getElementById("calc").innerHTML = document.getElementById("calc").value + "*(-1)";
        numb_id = "";
    } else if (numb_id === "1/x") {
        num2 = 1 / Number(num2);
        control = 1;
        numb_id = "";
    } else if (numb_id === "x*x") {
        num2 = Number(num2) * Number(num2);
        control = 1;
        numb_id = "";
    } else if (numb_id === "sqrrtx") {
        num2 = Math.sqrt(Number(num2));
        control = 1;
        numb_id = "";
    } else if (numb_id === "div") {
        if (num1 == "init") {
            res = Number(num2);
            num1 = res;
        } else if (equalv == 0) {
            res = Number(num1) / Number(num2);
            num1 = res;
        } else {
            num1 = num2;
        }
        operat = numb_id
        dispopt = "/";
        document.getElementById("calc").innerHTML = document.getElementById("calc").value + dispopt;
        if (equalv == 1) {
            document.getElementById("calc").innerHTML = num2 + dispopt;
            equalv = 0;
        }
        numb_id = "";
        control = 2;
    } else if (numb_id === "times") {
        if (num1 == "init") {
            res = Number(num2);
            num1 = res;
        } else if (equalv == 0) {
            res = Number(num1) * Number(num2);
            num1 = res;
        } else {
            num1 = num2;
        }

        operat = numb_id;
        dispopt = "*";
        document.getElementById("calc").innerHTML = document.getElementById("calc").value + dispopt;
        if (equalv == 1) {
            document.getElementById("calc").innerHTML = num2 + dispopt;
            equalv = 0;
        }
        numb_id = "";
        control = 2;
    } else if (numb_id === "minus") {
        if (num1 == "init") {
            res = Number(num2);
            num1 = res;
        } else if (equalv == 0) {
            res = Number(num1) - Number(num2);
            num1 = res;
        } else {
            num1 = num2;
        }
        operat = numb_id
        dispopt = "-";
        document.getElementById("calc").innerHTML = document.getElementById("calc").value + dispopt;
        numb_id = "";
        control = 2;
    } else if (numb_id === "plus") {
        if (num1 == "init") {
            res = Number(num2);
            num1 = res;
        } else if (equalv == 0) {
            res = Number(num1) + Number(num2);
            num1 = res;
        } else {
            num1 = num2;
        }
        operat = numb_id;
        dispopt = "+";
        document.getElementById("calc").innerHTML = document.getElementById("calc").value + dispopt;
        if (equalv == 1) {
            document.getElementById("calc").innerHTML = num2 + dispopt;
            equalv = 0;
        }
        numb_id = "";
        control = 2;
    } else if (numb_id === "equal") {
        if (operat != "") {
            if (operat == "div") {
                res = Number(num1) / Number(num2);
            } else if (operat == "times") {
                res = Number(num1) * Number(num2);
            } else if (operat == "minus") {
                res = Number(num2) - Number(num1);
            } else if (operat == "plus") {
                res = Number(num1) + Number(num2);
            }
            if (equalv == 0) {
                num1 = num2;
            }
            
            document.getElementById("calc").innerHTML = document.getElementById("calc").value + " = " + res;
            equalv = 1;
            control = 2;
            numb_id = "";
        } else {
            numb_id = "";
        }
        
    } else if (numb_id === "delete") {
        let a;
        a = document.getElementById("calc").value;
        document.getElementById("calc").innerHTML = a.slice(0, -1);
        num2 = num2.slice(0, -1);
        numb_id = "";
        if (equalv == 1) {
            equalreset();
        }
    }
    calcdisp = document.getElementById("calc").value;
    document.getElementById("calc").innerHTML = calcdisp + numb_id;

    if (control == 1) {
        document.getElementById("disp").innerHTML = num2 + numb_id;
        //document.getElementById("teste").innerHTML = numb_id;
    } else if (control == 2) {
        document.getElementById("disp").innerHTML = res;
        //document.getElementById("teste").innerHTML = numb_id;
        control = 0;
    } else if (control == 0) {
        document.getElementById("disp").innerHTML = numb_id;
        //document.getElementById("teste").innerHTML = numb_id;
        control = 1;
    }
    //document.getElementById("teste2").innerHTML =`control  ${control}`;
    document.getElementById("n1").innerHTML = `num1 =  ${num1}  num2 =  ${num2}`;
    //document.getElementById("n2").innerHTML = `num2 =  ${num2}`;
    //document.getElementById("n3").innerHTML = "res =  " + res;
}