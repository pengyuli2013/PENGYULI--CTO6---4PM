// write your codes here
// let shapeColor='blue';
// let cicleSize =5;
// let rectSize=50;
// function setup(){
//     createCanvas(400,400);
//     background(220);
//     noStroke();
// }

// function mousePressed(){
//     shapeColor=color(random(255),random(255),random(255));
//     circleSize = 5; 

// }
// function mouseDragged(){
//     fill(shapeColor);
//     ellipse(mouseX,mouseY,circleSize,circleSize);
//     circleSize +=0.5;
// }

// 
function setup(){
    createCanvas(400,400);
    background(220);
    

}
let numCircles=0;
let ranSize = 0;
function keyPressed(){
    numCircles=random(5,20);
    ranSize=random(10,80);
    for (let i = 0;i<numCircles;i++){
        fill(random(255),random(255),random(255));
        ellipse(random(400),random(400),ranSize,ranSize);

    }
}

