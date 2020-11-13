var canvas,database,gameState=0,playerCount
var form,player,game 

function setup(){
  canvas = createCanvas(800,800);
  database = firebase.database();
  game = new Game()
  game.getState();
  game.start();
  

  
}

function draw(){}
  