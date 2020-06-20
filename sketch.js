var database;
var gameState=0;
var voterCount;
var voterIndex;
var form1,form2,voter,game;

function setup(){
  
  createCanvas(900,750);
  database = firebase.database();
  
  voter=new Voter();
  voter.getVoterCount();

  game=new Game();
  game.getState();
  game.start();
}

function draw(){

  strokeWeight(3);
  line(360,47,500,47);
  line(360,54,500,54);

};