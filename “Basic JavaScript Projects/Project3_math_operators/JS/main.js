function Calculation_multiplication(){ //multiplication
    var simple_math = 7365427 *2 ;
    document.getElementById("Math1").innerHTML = "7365427 *2 = " + simple_math;
}
function Calculation_division(){ //division
    var simple_math2 = 73654 / 642 ;
    document.getElementById("Math2").innerHTML = "73654 / 642 = " + simple_math2;

}
function Calculation_addition() { //addition
    var addition = 543 +646;
    document.getElementById("Math3").innerHTML = " 543 +646 = " + addition;
}
function Calculation_substraction(){ //substraction
    var substraction = 6464-242;
    document.getElementById("Math4").innerHTML = "6464-242 =" + substraction;
}

function Multiple_operation(){ //multiple operation
    var operation = (10 + 20) * 10 / 3 - 40;
    document.getElementById("Math5").innerHTML = "10 plus 20, multipled by 10, divided by 3 and then substracted by 40 equals " + operation;
}
function Modulus_operator(){ //modulus
    var modulus = 6464%74;
    document.getElementById("Math6").innerHTML = "The remainder of 6464%74 is=" + modulus;
}

function Negation_Operator(){ //negation
    var z = 4343;
    document.getElementById("Math7").innerHTML = "The negative number for 4343 is" + -z;
}

function Increment(){ // increment
    var y = 10;
    y++;
    document.getElementById("Math8").innerHTML = y;
}

function Decrement(){ //decrement 
    var x = 63.43;
    x--;
    document.getElementById("Math9").innerHTML = x;
}
function Random(){ //get random number
    var B = 100;
    var A = Math.round(Math.random()*100);
    var C = B-A;
    document.getElementById("Math10").innerHTML = "100 - Random Number is: " + C;
}