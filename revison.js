let size = 30;
function setup (){
    createCanvas(500,500);
    background(220);
}
// let hello = (500-size)/2;
// function draw () {
//     fill(0);
//     rect(hello,hello,size,size);
// }
circleDiameter = 50;
function draw(){
    for(let i = 0;i<5;i++){
        fill(0, i*50, 0);
        ellipse(50 +i*50 , 50 + i*50, circleDiameter,circleDiameter);
    }
}