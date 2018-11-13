// Top canvas, non-interactive
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.font = "16px Comic Sans MS";
ctx.fillStyle = "black";
ctx.textAlign = "center";
ctx.fillText("Try to hit the enemy by pressing space bar to fire. Move left and right with the 'a' and 'd' keys and up and down with the 'w' and 's' keys. Click 'Go Again' to reset after hit.",canvas.width/2, canvas.height/2);


// Bottom canvas, interactive
var canvas2 = document.getElementById("myCanvas2");
var ctx2 = canvas2.getContext("2d");
ctx2.font = "30px Comic Sans MS";
ctx2.fillStyle = "black";
ctx2.textAlign = "center";
ctx2.fillText("Welcome",canvas2.width/2, canvas2.height/2);

//local storage
function saveStuff()
{
    //if new highscore
    if(score > highscore) {
        name = document.getElementById("userInput").value;
        window.localStorage.setItem("name", name);
        window.localStorage.setItem("highscore", score);
        highscore = score;   
    }
    //else score is not greater than old highscore
    else {
        window.localStorage.setItem("name", name);
        window.localStorage.setItem("highscore", highscore);
    }

}
function retrieveStuff()
{
    // Retrieve
    window.document.getElementById("result").innerHTML = window.localStorage.getItem("name");
    window.document.getElementById("result2").innerHTML = window.localStorage.getItem("highscore");

}

// Game
var startGame = false;
var isFiring = false;
document.getElementById("again").disabled = true;
var score = 0;
var highscore = 0;
localStorage.setItem("highscore",0);

var enemyX = 200,enemyY = 0;
var enemy2X = 300,eneny2Y = 0;
var x=400,y = 400;
var bulletX = x-10,bulletY = y-10;
var canvas2 = document.getElementById('myCanvas2');
ctx2 = canvas2.getContext('2d');

$(document).ready(function($){

$('#btnCheck').on('click', function() {

startGame = true;
});

$('body').on('keypress', function (e) {
var actualKeyCode = e.keyCode;               // Get the Unicode value
var actualCharacter = String.fromCharCode(actualKeyCode);

if(actualCharacter === "w")
{
    y-=10;
    bulletY = bulletY -10;
}
else if(actualCharacter === "a")
{
  if(x-10 >= 0)
   {
   x-=10;
    bulletX = bulletX- 10;
   }


}
else if(actualCharacter === "s")
{
 y+=10;
 bulletY = bulletY+ 10;
}
else if(actualCharacter === "d")
{

  x+=10;
  bulletX = bulletX + 10;
}

else if(actualKeyCode === 32) //space bar
{

    setInterval(fire,100);
     isFiring = true;
}

//draw();

});
});

function draw()
{
  ctx2.clearRect(0,0,canvas2.width,canvas2.height);
  ctx2.fillRect(x,y,50,50);
  ctx2.fillRect(enemyX, enemyY, 20,20);
  ctx2.fillRect(bulletX, bulletY, 5,5);   
}

function redraw() {
  ctx2.clearRect(0,0,canvas2.width,canvas2.height);
  //ctx.fillRect(x,y,50,50);
  ctx2.fillRect(enemyX+10, enemyY+10, 20,20);
  //ctx.fillRect(bulletX, bulletY, 5,5); 
}

function fallingEnemy()
{

if(startGame)
{
    enemyY +=10; 
    if(enemyY > 550) {
        console.log("missed");
        document.getElementById("report").innerHTML = "You missed... Go again?";
        document.getElementById("again").disabled = false;
    }

}
//  draw();
}

function fire()
{

 if(isFiring)
 {  
  bulletY-=1;
     if(checkCollision(bulletX,bulletY,5,5,enemyX,enemyY,15,15))
     {
       //console.log("hit");
       document.getElementById("report").innerHTML = "HIT";
       document.getElementById("again").disabled = false;
       startGame = false; //enemy stops
       isFiring = false; // stops bullet

       score += 1;
       document.getElementById("score").innerHTML = score; //update score
       
       

     }        
 }    
}

function goAgain() {

    console.log("going again");
    document.getElementById("report").innerHTML = "";


    enemyX = Math.floor(Math.random() * 900);
    enemyY = 0;

    x = Math.floor(Math.random() * 900 + 10);
    y = Math.floor(Math.random() * 400) + 100;

    bulletX = x-10;
    bulletY = y-10;

    canvas2 = document.getElementById('myCanvas2');
    ctx2 = canvas2.getContext('2d');

    // Testing ------------------
    //console.log("new position");
    //console.log("x = " + x);
    //console.log("y = " + y);

    draw();

}

setInterval(fallingEnemy,1000);
setInterval(draw,1000/60);

// This performs simple rectangular collision detection

function checkCollision(x1,y1,h1,w1,x2,y2,h2,w2)
{

  if (x1 < x2 + w2 && x1 + w1 > x2 && y1 < y2 + h2 && y1 + h1 > y2)
  {
    return true;  
  }
  else
  {
    return false;      
  }  
}  
            





