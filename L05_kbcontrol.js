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
// function setup(){
//     createCanvas(400,400);
//     background(220);
    

// }
// let numCircles=0;
// let ranSize = 0;
// let keytime=1;
// function keyPressed(){
//     numCircles=random(5,20);
    
//     for (let i = 0;i<numCircles;i++){
//         ranSize=random(10,80);
//         fill(random(255),random(255),random(255));
//         ellipse(random(400),random(400),ranSize,ranSize);

//     }
// }
// function keyReleased(){
//     background(220);
// }
// let showCircle = false;
// function setup(){
//     createCanvas(400,400);
//     background(220);
//     stroke(0);
//     fill(255);
// }

// function draw(){
//     background(220);
//     if(showCircle){
//         circle(width/2,height/2,100);
// }
// }


// function keyPressed(){
//     if(key==="c"|| key==="C"){
//         showCircle = !showCircle
//     }
// }
function draw(){
    background(220);
    if(showCircle){
        circle(width/2,height/2,200);

    }
}

function keyPressed(){
    console.log("key",key);
    console.log(key)
}