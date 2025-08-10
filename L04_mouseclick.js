// write your codes here

function setup()  {
    createCanvas(400,400);
    background(220);
}

let dis=30;
let amount=5;
let diameter=20;
let startX=amount*diameter;
function draw(){
    
    fill(100);
    for ( let o =0;i<amount;o++){
        circle(50+o*50,50+o*50,50);
    }
    
}