function Till_Function() {
    var Number_of_products, Can_use;
    Number_of_products = document.getElementById("Number_of_products").value;
    Can_use = (Number_of_products < 10)? "You have enough products":"You have to many products";
    document.getElementById("Till").innerHTML = Can_use + " to use this till";
}

function Client(Town, Postcode, Age){
    this.Client_Town = Town;
    this.Client_Postcode = Postcode;
    this.Client_Age = Age;
}

var Julia = new Client("Long Eaton", "NG10 1JE", 24);
var Cameron = new Client ("Castle Donigton", "DE74 2PP", 27);
var Mark = new Client("Derby", "DE34 3FD", 21);
function Details(){
    document.getElementById("New_and_This").innerHTML = 
    "Julia lives in " + Julia.Client_Town + " her postcode is: " + Julia.Client_Postcode + " and she is " + Julia.Client_Age + ".";
}

function Product_counter(){
    document.getElementById("Nested_Function").innerHTML = Counter();
    function Counter(){
        var all_products = 2;
        var Adding = document.getElementById("Number_of_products").value;
        function Count() {all_products+Adding;}
        Count();
        return all_products;
    }
}


