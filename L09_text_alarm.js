let countdown = 5;
let interval;
let change;
let sound;
let bgColor = 220;

function preload(){
    sound=loadSound('assets/bossaNova.mp3');
}

function setup(){
    createCanvas(600,400);
    textAlign(CENTER,CENTER);

}

function draw() {
    background(bgColor);
    textSize(24);
    text("Click to start timer", width/2, height-50);
    textSize(80);
    text(countdown, width/2, height/2);
}

function mousePressed(){
    interval=setInterval(updateCountdown,1000);
}

function updateCountdown(){
    if(countdown>0){
        countdown-=1;


    }else{
        clearInterval(interval);
        change=setInterval(changeVar,500);
    }
}

function changeVar(){
    bgColor = color(random(255),random(255),random(255));
    sound.play();
}

function keyPressed(){
    if(keyCode===32){
        clearInterval(change);
        sound.stop();
    }
}