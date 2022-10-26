
// INFINITY AND -INFINITY
function Number1() {
document.getElementById("Number").innerHTML =  7836592706512790659128659823765812837428965392856237865832768273648;
}
function Number2() {
    document.getElementById("Number2").innerHTML =  -672819641064791605781365078165781658703165781563781568173561875618;
    }


//BOOLEAN
function Checker() {
    document.getElementById("Boolean").innerHTML = 10 < 8;
}


//COERCION
function coercion(){
    var one = "10";
    var two = 19;
    var three= one + two;
    document.getElementById("Number3").innerHTML = three;
}


//CONSLOE.LOG
console.log(535<532);

function Equal_check(){
    document.getElementById("Equal").innerHTML= 3+7==10;
}


//TYPE COERCION
function Equal_check2(){
    var A = "Dog";
    var B = "Dog";
    document.getElementById("Check1").innerHTML= A===B;
}
function Equal_check3(){
    var C = 1;
    var D = "dog";
    document.getElementById("Check2").innerHTML= C===D;
}
function Equal_check4(){
    var E = 1;
    var F = "1";
    document.getElementById("Check3").innerHTML= E===F;
}
function Equal_check5(){
    var G = 1;
    var H = 100;
    document.getElementById("Check4").innerHTML= G===H;
    
}


//LOGICAL OPERATORS
function Logic_check1(){
    var A1 = 10>7;
    var B1 = 5>3;
    document.getElementById("Logic_check1").innerHTML = A1&&B1;
}

function Logic_check2(){
    var C1 = 8<5;
    var D1 = 6>1;
    document.getElementById("Logic_check2").innerHTML = C1&&D1;
}

function Logic_check3(){
    var E1 = 10>7;
    var F1 = 7>10;
    document.getElementById("Logic_check3").innerHTML = E1||F1;
}

function Logic_check4(){
    var G1 = 8>10;
    var H1 = 5>8;
    document.getElementById("Logic_check4").innerHTML = G1||H1;
}

function Logic_check5(){
    document.getElementById("Logic_check5").innerHTML = !(6>10);
}

function Logic_check6(){
    document.getElementById("Logic_check6").innerHTML = !(20>10);
}