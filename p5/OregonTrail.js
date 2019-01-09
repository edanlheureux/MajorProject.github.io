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
let imgwagon;

let imgop1,imgop2,imgop3,imgop4,imgop5;
let imgop6,imgop7,imgop8,imgop9,imgop10;
let imgop11,imgop12,imgop13;


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
  ////////////////////////////////////////////////////////////////////////
  /// open world events and locations
  imgop1 = loadImage("assets/openworldfort.PNG");
  imgop2 = loadImage("assets/openworldfort2.PNG");
  imgop3 = loadImage("assets/openworldmnt.PNG");
  imgop4 = loadImage("assets/openworldoxdies.PNG");
  imgop5 = loadImage("assets/openworldriver.PNG");
  imgop6 = loadImage("assets/openworldrock.PNG");
  imgop7 = loadImage("assets/openworldrock2.PNG");
  imgop8 = loadImage("assets/openworldrock3.PNG");
  imgop9 = loadImage("assets/openworldspring.PNG");
  imgop10 = loadImage("assets/openworldtown.PNG");
  imgop11 = loadImage("assets/oxhurt.PNG");
  imgop12 = loadImage("assets/theif.PNG");
  imgop13 = loadImage("assets/wrongtrail.PNG");
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

function trailtoriv(){
  image(imgop5,0,0,windowWidth,windowHeight);
}
function river1(){
  image(img2,0,0,windowWidth,windowHeight);
}
function river1toriver2(){
  image(imgop5,0,0,windowWidth,windowHeight);
}
function river2(){
  image(img3,0,0,windowWidth,windowHeight);
}
function riv2tofrtkern(){
  image(imgop10,0,0,windowWidth,windowHeight);
}
function fortkern(){
  image(img4,0,0,windowWidth,windowHeight);
}
function fortkerntochimney(){
  image(imgop6,0,0,windowWidth,windowHeight);
}
function chimneyrck(){
  image(img5,0,0,windowWidth,windowHeight);
}
function chimtofrtlarm(){
  image(imgop2,0,0,windowWidth,windowHeight);
}
function fortlarm(){
  image(img6,0,0,windowWidth,windowHeight);
}
function fortlarmtoindirock(){
  image(imgop7,0,0,windowWidth,windowHeight);
}
function indirock(){
  image(img7,0,0,windowWidth,windowHeight);
}
function indirocktosouthpass(){
  image(imgop8,0,0,windowWidth,windowHeight);
}
function southpass(){
  image(img8,0,0,windowWidth,windowHeight);
}
function southpasstogrnriver(){
  image(imgop5,0,0,windowWidth,windowHeight);
}
function greenriver(){
  image(img9,0,0,windowWidth,windowHeight);
}
function grnrivertosodasprings(){
  image(imgop9,0,0,windowWidth,windowHeight);
}
function sodasprings(){
  image(img10,0,0,windowWidth,windowHeight);
}
function sodaspringstofthall(){
  image(imgop2,0,0,windowWidth,windowHeight);
}
function fthall(){
  image(img11,0,0,windowWidth,windowHeight);
}
function fthalltosnakeriver(){
  image(imgop5,0,0,windowWidth,windowHeight);
}
function snakeriver(){
  image(img12,0,0,windowWidth,windowHeight);
}
function snakerivertoftboise(){
  image(imgop1,0,0,windowWidth,windowHeight);
}
function ftboise(){
  image(img13,0,0,windowWidth,windowHeight);
}
function ftboisetobluemnt(){
  image;
}
function bluemnt(){
  image(img14,0,0,windowWidth,windowHeight);
}
function bluemnttodales(){
  image;
}
function thedalles(){
  image(img15,0,0,windowWidth,windowHeight);
}
function dallestowillamentvly(){
  image;
}
function Willamettevalley(){
  image(img16,0,0,windowWidth,windowHeight);
}
function youwin(){
  image;
}
function youlose(){
  image;
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
  if (state === 2.5){
    trailtoriv();
  }
  if (state === 3){
    river1();
  }
  if (state === 3.5){
    river1toriver2();
  }
  if (state === 4){
    river2();
  }
  if (state === 4.5){
    riv2tofrtkern();
  }
  if (state === 5){
    fortkern();
  }
  if (state === 5.5){
    fortkerntochimney();
  }
  if (state === 6){
    chimneyrck();
  }
  if (state === 6.5){
    chimtofrtlarm();
  }
  if (state === 7){
    fortlarm();
  }
  if (state === 7){
    fortlarmtoindirock();
  }
}
//////////////////////////////////////////////////

function keyPressed(){
  if (state === 2){
    if (key === " "){
      state =2.5;
    }
  }
  if (state === 3){
    if (key === " "){
      state =3.5;
    }
  }
  if (state === 4){
    if (key === " "){
      state =4.5;
    }
  }
  if (state === 5){
    if (key === " "){
      state =5.5;
    }
  }
  if (state === 6){
    if (key === " "){
      state =6.5;
    }
  }
  if (state === 7){
    if (key === " "){
      state =7.5;
    }
  }
  if (state === 8){
    if (key === " "){
      state =8.5;
    }
  }
  if (state === 9){
    if (key === " "){
      state =9.5;
    }
  }
  if (state === 10){
    if (key === " "){
      state =10.5;
    }
  }
  if (state === 11){
    if (key === " "){
      state =11.5;
    }
  }
  if (state === 12){
    if (key === " "){
      state =12.5;
    }
  }
  if (state === 13){
    if (key === " "){
      state =13.5;
    }
  }
  if (state === 14){
    if (key === " "){
      state =14.5;
    }
  }
  if (state === 15){
    if (key === " "){
      state =15.5;
    }
  }
}
