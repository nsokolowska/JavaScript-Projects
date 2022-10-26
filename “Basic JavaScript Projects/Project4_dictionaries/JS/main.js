function myDictionary() { //FUNCTION's BEGINNING
    var Clothes = {  //VARIABLE
        Category: "Dress",
        Type:"Midi",
        Color: "Red",
        Size: "M",
        Brand: "Zara",
    };
    delete Clothes.Category; //DELETE OPERATOR
    document.getElementById("Dictionary").innerHTML = Clothes.Category; //SHOW UP CHOOSEN ELEMENT 
}