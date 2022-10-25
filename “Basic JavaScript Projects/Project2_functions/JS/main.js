function random(){   //function
    var lucky = "Your lucky numer is: "; //assign variable
    lucky+= (Math.random()*10+1); //generator random number
    document.getElementById("number").innerHTML = lucky; 
    document.getElementById("number").style.color = "red"; //assign color
}