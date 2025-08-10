// write your codes here
let shapeColour = 'blue';
function setup()  {
    createCanvas(600,600);
    background(220);
}
// let amount =5
// let var = null
// function draw(){
//     for ( let o =0;o<amount;o++){
//         var = 255/amount;
//         fill(0,0+var,0);
//         circle(50+o*50, 50+o*50, 50);
//     }
    
// }
// function draw(){
//     fill(shapeColour);
//     circle(width/2,height/2,100);
// }
// // }
// function mousePressed(){
//     shapeColour = 'red';
// }
// function mouseReleased(){
//     //shapeColour = 'white';
// }

// function mousePressed(){
//     shapeColour = color(random(255),random(255),random(255));
// }
// function mouseReleased(){
//     shapeColour = 'white';
// }



function draw() {
fill(shapeColour);
circle(mouseX, mouseY, 100);
}

function mousePressed() {
shapeColour = 'white';
}

function mouseReleased() {
shapeColour = color(random(255), random(255), random(255));
}

function mouseMoved(){
    cicle(mouseX,mouseY,30);
}