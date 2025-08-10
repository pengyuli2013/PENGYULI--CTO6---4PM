// write your codes here

function setup()  {
    createCanvas(400,400);
    background(220);
}

function draw(){
    for ( let o =0;o<5;o++){
        fill(0,255);
        circle(50+o*50, 50+o*50, 50);
    }
    
}