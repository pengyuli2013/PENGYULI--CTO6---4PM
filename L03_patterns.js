//let colorValue=0

function setup() {
    createCanvas(600, 400);
    background(220);
  //   noLoop(); // Stops continuous drawing
  }
  //let spacing=90;
function draw() {
  // Recap 1: Repeating Circles
  // circle(75,200,100);
  // circle(225,200,100);
  // circle(375,200,100);
  // circle(525,200,100);
  // for(let i =0; i < 4; i++) {
  //   fill(colorValue%255);
  //   circle(spacing+i*spacing,200,40);
  //   colorValue +=1;
    
  
  // }
// for (let i = 0; i < 6; i++) {
//   ellipse(100,i*100,100,100)
//   if (i % 2 === 0) {
//     fill(0);
//     rect(100,)
//   } else {
//     fill(255); 
//   }
// }

// rect(0,100,width,200);
// circle(width/2,height/2,100);


// let diameter = 30;
// let numCircles = 5;
// let totalWidth = diameter * numCircles;
// let startX = (width-totalWidth)/2 + diameter/2

// for (let i=0; i<5;i++){
//   circle(startX+i*diameter, height/2,diameter);

// }
// 

let diameter = 30;
let numCircles = 5;
let totalWidth = diameter * numCircles;

let startX = (width-totalWidth)/2 + diameter/2;


for (let n=0; n<5;n++){
  
  for(let i =0; i<5;i++){
    circle(startX+i*diameter, height/numCircles+n*30,diameter);



  }
  
}

  // Task 1: Colour Gradient

  // Task 2: Colour Loop

  // Task 3: Row of Circles

  // Task 4: Grid of Circles
}