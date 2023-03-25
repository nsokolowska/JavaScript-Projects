var coll = document.getElementsByClassName("menu-list");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}



function getReceipt(){
    //this initializes our string so it can get passed from//
    //function to functio, growing line by line into a full receipt//
    var text='<h3>You ordered:</h3>';
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName('size');
    for (var i =0; i< sizeArray.length; i++){
        if(sizeArray[i].checked){
            var selectedSize = sizeArray[i].value ;
            text += '<strong>' + selectedSize +'</strong><br>';
        }
    }
    switch(selectedSize){
        case 'Small Pizza':
            sizeTotal = 8;
            break;
        case 'Medium Pizza':
            sizeTotal = 10;
            break;
        case 'Large Pizza':
            sizeTotal = 12;
            break;
        case 'Extra Large Pizza':
            sizeTotal = 14;
            break;
    }
    runningTotal = sizeTotal;
    getBase(runningTotal, text);
};
function getBase(runningTotal,text){
    var baseTotal = 0;
    var baseArray = document.getElementsByClassName('base');
    for (var a=0; a <baseArray.length;a++){
        if(baseArray[a].checked){
            var selectedBase = baseArray[a].value;
            text += '<strong>Base:</strong> ' + selectedBase +'<br><strong>Ingredients:</strong> '; 
        }
    }
    switch(selectedBase){
        case 'Tomato Base':
            baseTotal = 0;
            break;
        case 'Garlic Butter Base':
            baseTotal = 1;
            break;
        case 'Creamy Base':
            baseTotal = 1;
            break;
        case 'BBG Base':
            baseTotal = 2;
            break;
    }
    
    runningTotal += baseTotal;
    getVegetables(runningTotal,text);
};
function getVegetables(runningTotal,text){
    var vegetablesTotal =0;
    var selectedVegetables = [];
    var vegetablesArray = document.getElementsByClassName('vegetables');
    for (var j=0; j<vegetablesArray.length;j++){
        if (vegetablesArray[j].checked){
            selectedVegetables.push(vegetablesArray[j].value);
            text += vegetablesArray[j].value+', ';
        }
    }
    var vegetablesCount = selectedVegetables.length;
    if(vegetablesCount >= 2){
        vegetablesTotal =  (vegetablesCount-1) * 2;
    } else {
        vegetablesTotal = 0;
    }
    runningTotal += vegetablesTotal;
    getTopping(runningTotal,text);
    
};
function getTopping(runningTotal,text){
    var toppingTotal = 0;
    var selectedTopping = [];
    var toppingaArray = document.getElementsByClassName('toppings');
    for (var k=0; k<toppingaArray.length;k++){
        if (toppingaArray[k].checked){
            selectedTopping.push(toppingaArray[k].value);
            text += toppingaArray[k].value + ', ';
        }
    }
    var toppingCount = selectedTopping.length;
    if(toppingCount >= 2 ){
        toppingTotal = (toppingCount-1) * 3;
    } else {
        toppingTotal =0;
    }
    runningTotal += toppingTotal;
    getDips(runningTotal,text);
};
function getDips(runningTotal,text){
    var dipsTotal = 0;
    var selectedDip = [];
    var dipArray = document.getElementsByClassName('dips');
    for (var l=0;l<dipArray.length;l++){
        if(dipArray[l].checked){
            selectedDip.push(dipArray[l].value);
            text += '<br><strong>Dip:</strong> '+dipArray[l].value;
        }
    }
    var dipCount = selectedDip.length;
    if(dipCount >= 2) {
        dipsTotal = (dipCount-1) * 2;
    } else{
        dipsTotal = 0;
    }
    runningTotal += dipsTotal;
    document.getElementById('showText').innerHTML = text;
    document.getElementById('totalPrice').innerHTML = '<strong>Total: &#163;' + runningTotal + '.00</strong>';
};
