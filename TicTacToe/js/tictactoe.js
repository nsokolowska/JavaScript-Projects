let activePlayer = 'X'; // This variable keeps track of who's turn it is.
let selectedSquares = []; // This array stores an array of moves. We use this to determine win conditions.

//this function is for placing an x or o in a sqaure
function placeXOrO(squareNumber) {
    //This condition ensures a sqaure hasn't be selected already.
    if(!selectedSquares.some(element => element.includes(squareNumber))){
        let select = document.getElementById(squareNumber);
        if(activePlayer === 'X') {
            select.style.backgroundImage = 'url("images/x2.png")';
        } else {
            select.style.backgroundImage = 'url("images/o2.png")'
        }
        selectedSquares.push(squareNumber + activePlayer);
        checkWinConditions();
        if (activePlayer=== 'X') {
            activePlayer = 'O';
        } else {
            activePlayer = 'X'; //changing player//
        }
        audio('./media/place2.wav'); //Place audio during turns//
        if (activePlayer === 'O'){ 
            disableClick();
            setTimeout (function(){computersTurn();}, 1000);
        }
        return true;
    }
    //Computer's turn function //
    function computersTurn() {
        let success= false;
        let pickASqaure;
        while(!success){
            pickASqaure = String(Math.floor(Math.random()*9));
            if (placeXOrO(pickASqaure)){
                placeXOrO(pickASqaure);
                success=true;                
            };
        }
    }
}
//assigin all win conditions//
function checkWinConditions() {
    if (arrayIncludes('0X', '1X', "2X")) {drawWinLine (50,100,558,100);}
    else if (arrayIncludes('3X', '4X', "5X")) {drawWinLine (50,304,558,304);}
    else if (arrayIncludes('6X', '7X', "8X")) {drawWinLine (50,508,558,508);}
    else if (arrayIncludes('0X', '3X', "6X")) {drawWinLine (100,50,100,558);}
    else if (arrayIncludes('1X', '4X', "7X")) {drawWinLine (304,50,304,558);}
    else if (arrayIncludes('2X', '5X', "8X")) {drawWinLine (508,50,508,558);}
    else if (arrayIncludes('6X', '4X', "2X")) {drawWinLine (100,508,510,90);}
    else if (arrayIncludes('0X', '4X', "8X")) {drawWinLine (100,100,520,520);}
    else if (arrayIncludes('0O', '1O', "2O")) {drawWinLine (50,100,558,100);}
    else if (arrayIncludes('3O', '4O', "5O")) {drawWinLine (50,304,558,304);}
    else if (arrayIncludes('6O', '7O', "8O")) {drawWinLine (50,508,558,508);}
    else if (arrayIncludes('0O', '3O', "6O")) {drawWinLine (100,50,100,558);}
    else if (arrayIncludes('1O', '4O', "7O")) {drawWinLine (304,50,304,558);}
    else if (arrayIncludes('2O', '5O', "8O")) {drawWinLine (508,50,508,558);}
    else if (arrayIncludes('6O', '4O', "2O")) {drawWinLine (100,508,510,90);}
    else if (arrayIncludes('0O', '4O', "8O")) {drawWinLine (100,100,520,520);}
    else if (selectedSquares.length >=9 ) {
        audio('./media/tie.mp3');
        setTimeout(function() {resetGame(); },1000);
    }
//checking if array includes 3 strings //
    function arrayIncludes(sqaureA, squareB, squareC){
        const a = selectedSquares.includes(sqaureA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        if (a=== true && b===true && c===true) {return true;}
    }
}
//funtions makes body element remporailly unclickable for 1 second//
function disableClick() {
    body.style.pointerEvents = 'none';
    setTimeout(function() {body.style.pointerEvents = 'auto';}, 1000);
}
function audio(audioURL) {
    let audio = new Audio(audioURL);
    audio.play();
}
//this function utilize html cnavas to draw win lines //
function drawWinLine (coordX1, coordY1, coordX2, coordY2) {
    const canvas = document.getElementById('win-lines');
    const c = canvas.getContext('2d');
    let x1 = coordX1,
        y1 = coordY1,
        x2 = coordX2,
        y2 = coordY2,
        x = x1,
        y = y1;
//this function interacts win canvas//
    function animateLineDrawing(){
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        c.clearRect (0,0,608,608);
        c.beginPath();
        c.moveTo(x1,y1);
        c.lineTo(x,y);
        c.lineWidth =10;
        c.strokeStyle = 'rgba(70,255,33,.8)';
        c.stroke();
        if (x1<=x2 && y1<=y2){
            if(x<x2){x+=10;}
            if(y<y2){y+=10;}
            if(x>x2 && y>=y2){cancelAnimationFrame(animationLoop);}
        }
        if (x1<=x2 && y1>=y2){
            if(x<x2){x+=10;}
            if(y>y2){y-=10;}
            if(x>=x2 && y<=y2){cancelAnimationFrame(animationLoop);}
        }
    }
    //this functions clears body after canvas//
    function clear(){
        const animationLoop = requestAnimationFrame(clear);
        c.clearRect(0,0,608,608);
        cancelAnimationFrame(animationLoop);
    }
    disableClick();
    audio('./media/winGame2.wav');
    animateLineDrawing();
    setTimeout(function (){clear();resetGame();},1000);
    }
//resetgame//
function resetGame(){
    for(let i = 0; i < 9; i++){
        let sqaure = document.getElementById(String(i));
        sqaure.style.backgroundImage= '';
    }
    selectedSquares= [];
}
