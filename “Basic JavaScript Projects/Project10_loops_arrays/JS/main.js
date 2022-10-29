//loop
function Call_loop() {
    var X = 1;
    var Y = "";
    while(X<=10){
        Y += "<br>" + (X + 2) ;
        X++
    }
    document.getElementById("Loop").innerHTML = Y;
}
//for
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet","Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y= 0; Y<Instruments.length; Y++){
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}
//array
function array_Function(){
    var Dog_List = [""];
        Dog_List[0] = "Pekingese";
        Dog_List [1] = "Dalmatian";
        Dog_List [2] = "Bulldog";
        Dog_List [3] = "Amstaff";
        Dog_List [4] = "Corgi";
        document.getElementById("Array").innerHTML = "This dog is " + Dog_List[1];
}
//constant
function constant_function() {
    const Dog_Information = {name:"Poly", type:"Pekingese", color:"Gigner", Age:3};
    Dog_Information.Age = 4;
    Dog_Information.Cost = "$500";
    document.getElementById("Constant").innerHTML = "This " + Dog_Information.type + " is " + Dog_Information.name + " and it is " + Dog_Information.Age + " years old.";
}
// var and let
function XYZ_function(){
    var X = 10;
    var Y = 20;
    var Z = 30;
    document.getElementById("XYZ").innerHTML = "<br>" +X + "<br>"+ Y + "<br>" + Z;
    {
        let X = 15;
        document.getElementById("XYZ_1").innerHTML =  "<br>" +X + "<br>"+ Y + "<br>" + Z;
    }
}
// object
let pizza = {
    course: "lunch",
    sauce: "tomato Sauce",
    ingredient: "pepperoni",
    cheese: "mozzarella",
    description : function() {
        return "The pizza is the best for" + this.course + " and you can eat it with " + this.sauce + this.ingredient + this.cheese;
        }
}
document.getElementById("Pizza_Object").innerHTML = pizza.description();
