// Oregon Trail
// Edan L'Heureux
// --/--/2019
////////////////////////////////////////////////////////////////////////////////
let state;
let food;
let clothes;


let music,music1,music2,music3;
let music4,music5,music6,music7;
let music8,music9,music10,music11;
let music12,music13,music14,music15;
let music16,music17,music18;

let img,img1,img2,img3;
let img4,img5,img6,img7;
let img8,img9,img10,img11;
let img12,img13,img14,img15;
let img16,img17,img18,imgmap;
let imgwagon,imgforest;



////////////////////////////////////////////////////////////////////////////////
function preload(){
  /// sound files for all locations
  music = loadSound("assets/Oregon-Trail-Title-Screen1.mp3");
  music1 = loadSound("assets/Oregon-Trail-independence-MO2.mp3");
  music2 = loadSound("assets/Oregon-Trail-Kansas-River Crossing3.mp3");
  music3 = loadSound("assets/Oregon-Trail-Big-Blue River Crossing4.mp3");
  music4 = loadSound("assets/Oregon-Trail-Fort-Kearney5.mp3");
  music5 = loadSound("assets/Oregon-Trail-Chimney-Rock6.mp3");
  music6 = loadSound("assets/Oregon-Trail-Fort-Laramie7.mp3");
  music7 = loadSound("assets/Oregon-Trail-independence-Rock8.mp3");
  music8 = loadSound("assets/Oregon-Trail-South-Pass9.mp3");
  music9 = loadSound("assets/Oregon-Trail-Fort-Bridger10.mp3");
  music10 = loadSound("assets/Oregon-Trail-Green-River-Crossing11.mp3");
  music11 = loadSound("assets/Oregon-Trail-Soda-Springs12.mp3");
  music12 = loadSound("assets/Oregon-Trail-Snake-RiverCrossing13.mp3");
  music13 = loadSound("assets/Oregon-Trail-Fort-Hall14.mp3");
  music14 = loadSound("assets/Oregon-Trail-Fort-Boise15.mp3");
  music15 = loadSound("assets/Oregon-Trail-The-Blue-Mountains16.mp3");
  music16 = loadSound("assets/Oregon-Trail-Fort-Walla-Walla17.mp3");
  music17 = loadSound("assets/Oregon-Trail-The-Dalles18.mp3");
  music18 = loadSound("assets/Oregon-Trail-Willamette-Valley19.mp3");
  ///////////////////////////////////////////////////////////////////////////
  /// Images for all locations as well as the map
  img = loadImage("assets/Menu.png");
  img1 = loadImage("assets/indipendance.PNG");
  img2 = loadImage("assets/Kansas-River.PNG");
  img3 = loadImage("assets/Big-Blue-River.PNG");
  img4 = loadImage("assets/Fort-Kearney.PNG");
  img5 = loadImage("assets/Chimney-Rock.PNG");
  img6 = loadImage("assets/Fort-laramie.PNG");
  img7 = loadImage("assets/independance-Rock.PNG");
  img8 = loadImage("assets/South-Pass.PNG");
  img9 = loadImage("assets/Fort-Bridger.PNG");
  img10 = loadImage("assets/Green-River-crossing.PNG");
  img11 = loadImage("assets/Soda-Springs.PNG");
  img12 = loadImage("assets/Snake-River-crossing.PNG");
  img13 = loadImage("assets/Fort-Hall.PNG");
  img14 = loadImage("assets/Fort-Boise.PNG");
  img15 = loadImage("assets/Blue-Mountains.PNG");
  img16 = loadImage("assets/Fort-Walla-Walla.PNG");
  img17 = loadImage("assets/The-Dalles.PNG");
  img18 = loadImage("assets/Willamette-Valley.PNG");
  imgmap = loadImage("assets/map.png");
  imgwagon = loadImage("assets/wagon.PNG");
  imgforest = loadImage("assets/forest.png");
}
//////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////
function setup() {
  createCanvas(1600, 780);
  state =1;

  music.setVolume(0.7);
  music.loop();
}
///////////////////////////////////////////


///////////////////////////////////////////////
function draw() {
  stateis();
}
///////////////////////////////////////////////



/////////////////////////////////////////////////////
/// displays the main menu
function mainmenu(){
  background(255);
  image(img,0,0,windowWidth,windowHeight);
  fill(242,238,43);
  rect(1157, 695, 276, 27);
  if (mouseX < 1157+276 && mouseX > 1157 && mouseY < 695+27 && mouseY > 695){
    fill(190,249,10);
    rect(1157, 695, 276, 27);
  }
  fill(0);
  textStyle(ITALIC);
  textSize(20);
  text("Travle The Trail",1220, 715);
/////////////////////////////////////////////////////////
}
////////////////////////////////////////////////////////
function gametime(){
  image(img1,0,0,windowWidth,windowHeight);
  music1.setVolume(0.7);
  music1.loop();
}
////////////////////////////////////////////////////////

function trailtime(){
  image(imgforest,0,0,windowWidth,windowHeight);
}




/////////////////////////////////////////////////////////////////////////////
/// registers changes of states

function mousePressed() {
  //console.log(mouseX, mouseY);
  if (mouseX <= 1157+276 && mouseX >= 1157 && mouseY <= 695+27 && mouseY >= 695){
    state = 2;
    music.stop;
  }
}
///////////////////////////////////////////////////////

///////////////////////////////////////////////
/// determines what the state is and what is to be displayed on screen
function stateis(){
  if (state ===1){
    mainmenu();
  }
  if (state === 2){
    gametime();
  }
  if (state === 3.5){
    trailtime();
  }
}
//////////////////////////////////////////////////

function keyPressed(){
  if (state === 2){
    if (key === " "){
      state =3.5;
    }
  }
}
