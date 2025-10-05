let countdown = 5;
let interval;
let change;
let bgColor = 220;
function setup(){
    createCanvas(600,400);
    textAllign(CENTRE,CENTRE);

}

function draw (){
    background(bgColor);
    textSize(24);
    text("Click to start timer",width/2,height-50);
    textSize(80);
    text(countdown,width/2,height/2);
}

function mousePressed(){
    interval=setInterval(updateCountdown,1000);
}

function draw(){
    if(countdown>0){
        countdown-=1;


    }else{
        clearInterval(interval);
        change=setInterval(changeVar,500);
    }
}