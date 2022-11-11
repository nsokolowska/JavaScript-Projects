function Color_function(){
    var Color_Output;
    var Colors = document.getElementById("Color_Input").value;
    var Color_String = " is a great color";
    switch (Colors){
        case "Red":
            Color_Output = "Red" + Color_String;
        break;
        case "Yellow":
            Color_Output = "Yellow" + Color_String;
        break;
        case "Green":
            Color_Output = "Green" + Color_String;
        break;
        case "Blue":
            Color_Output = "Blue" + Color_String;
        break;
        case "Pink":
            Color_Output = "Pink" + Color_String;
        break;
        case "Purple":
            Color_Output = "Purple" + Color_String;
        break;
        default: 
        Color_Output = "Please enter a color exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML= Color_Output;
}

function change_function(){
    var A = document.getElementsByClassName("text");
    A[1].innerHTML = "This is section text.";
}

var A= document.getElementById("my_canvas");
var B= A.getContext("2d");
B.moveTo(0,0);
B.lineTo(300,100);
B.stroke();
var C = A.getContext("2d");
C.moveTo(300,0);
C.lineTo(0,100);
C.stroke();

var D = A.getContext("2d")
var grd = D.createLinearGradient(100, 0, 300, 0);
grd.addColorStop(0, "blue");
grd.addColorStop(1, "yellow");
D.fillStyle = grd;
D.fillRect(10, 10, 280, 80);