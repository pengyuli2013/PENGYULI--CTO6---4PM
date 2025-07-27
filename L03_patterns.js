let colorValue=0

function setup() {
    createCanvas(600, 400);
    background(220);
  //   noLoop(); // Stops continuous drawing
  }
  let spacing=90;
function draw() {
  // Recap 1: Repeating Circles
  // circle(75,200,100);
  // circle(225,200,100);
  // circle(375,200,100);
  // circle(525,200,100);
  for(let i =0; i < 4; i++) {
    fill(colorValue%255);
    circle(spacing+i*spacing,200,40);
    colorValue +=1;
    
  
  }






  // Task 1: Colour Gradient

  // Task 2: Colour Loop

  // Task 3: Row of Circles

  // Task 4: Grid of Circles
}