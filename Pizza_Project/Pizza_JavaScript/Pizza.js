function getReceipt(){
    //this initializes our string so it can get passed from//
    //function to functio, growing line by line into a full receipt//
    var text1='<h3>You Ordered:</h3>';
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName('size');
    for (var i =0; i< sizeArray.length; i++){
        if(sizeArray[i].checked){
            var selectedSize = sizeArray[i].value ;
            text1= text1+selectedSize +'<br>';
        }
    }
    if (selectedSize === 'Personal Pizza'){
        sizeTotal = 6;
    } else if (selectedSize === 'Small Pizza'){
        sizeTotal = 8;
    }else if (selectedSize === 'Medium Pizza'){
        sizeTotal = 10;
    }else if (selectedSize === 'Large Pizza'){
        sizeTotal = 14;
    }else if (selectedSize === 'Extra Large Pizza'){
        sizeTotal = 16;
    }
    runningTotal = sizeTotal;
    console.log(selectedSize+' = $' +sizeTotal+'.00');
    console.log('size text1:'+text1);
    console.log('subtotal: $' +runningTotal+'.00');
    //these variable will get passed on to each function//
    getTopping(runningTotal,text1);
};

function getTopping(runningTotal,text1){
    var toppingTotal =0;
    var selectedTopping = [];
    var toppingaArray = document.getElementsByClassName('toppings');
    for (var j=0; j<toppingaArray.length;j++){
        if (toppingaArray[j].checked){
            selectedTopping.push(toppingaArray[j].value);
            console.log('selceted topping item:('+toppingaArray[j].value+')');
            text1=text1+toppingaArray[j].value+'<br>';
        }
    }
    var toppingCount = selectedTopping.length;
    if(toppingCount >1){
        toppingTotal = (toppingCount-1);
    } else {
        toppingTotal =0;
    }
    runningTotal = (runningTotal+toppingTotal);
    console.log('total selected topping items:'+toppingCount);
    console.log(toppingCount +'topping - 1 free topping = '+ '$'+toppingTotal+'.00');
    console.log('topping text1'+text1);
    console.log('Purchase Total:' +'$' +runningTotal+'.00');
    document.getElementById('showText').innerHTML = text1;
    document.getElementById('totalPrice').innerHTML = '<h3>Total:<strong>$'+runningTotal +'.00'+'</strong></h3>';
    getVegetables(runningTotal,text1);
};
function getVegetables(runningTotal,text1){
    var vegetablesTotal =0;
    var selectedVegetables = [];
    var vegetablesArray = document.getElementsByClassName('vegetables');
    for (var l=0; l<vegetablesArray.length;l++){
        if (vegetablesArray[l].checked){
            selectedVegetables.push(vegetablesArray[l].value);
            console.log('selceted vegatable item:('+vegetablesArray[l].value+')');
            text1=text1+vegetablesArray[j].value+'<br>';
        }
    }
    var vegetablesCount = selectedVegetables.length;
    if(vegetablesCount >1){
        vegetablesTotal = (vegetablesCount-1);
    } else {
        vegetablesTotal =0;
    }
    runningTotal = (runningTotal+vegetablesTotal);
    console.log('total selected vegetable items:'+vegetablesCount);
    console.log(vegetablesCount +'vegetable - 1 free vegetable '+ '$'+vegetablesTotal+'.00');
    console.log('vegetable text1'+text1);
    console.log('Purchase Total:' +'$' +runningTotal+'.00');
    document.getElementById('showText').innerHTML = text1;
    document.getElementById('totalPrice').innerHTML = '<h3>Total:<strong>$'+runningTotal +'.00'+'</strong></h3>';
};
