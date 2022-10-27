//global and local variable
var x = 10
function first(){
    var y = 6;
    document.write(x+y);
}
function second() {
    console.log(x+y+6);
}
first();
second();

function get_Date(){
    if (new Date().getMonth() > 6){
        document.getElementById("Month").innerHTML = "It's the second part of the year"
    }
}

//else statement
function Calories_function(){
    kcal = document.getElementById("kcal").value;
    if (kcal >= 1500) {
        Minmax = "You are fine!";
    }
    else {
        Minmax = "You should eat more!"
    }
    document.getElementById("how_many_calories?").innerHTML = Minmax;
}
//else if statement

function Time_function(){
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0){
        Reply = "It's morning time!";
    }
    else if (Time >12 == Time <18){
        Reply = "It's the afternoon";
    }
    else {
        Reply = "It's evening time";
    }
    document.getElementById("Time_of_day").innerHTML=Reply;
}