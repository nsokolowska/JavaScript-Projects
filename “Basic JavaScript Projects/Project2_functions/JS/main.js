function random(){
    var lucky = "Your lucky numer is: ";
    lucky+= (Math.random()*10+1);
    document.getElementById("number").innerHTML = lucky;
    document.getElementById("number").style.color = "red";
}