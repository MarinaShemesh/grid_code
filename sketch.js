console.log('fading grid');
//let textArray = ['1','A','z'];

const padding = 0.5;
const rows = 50;
const columns = 50;
const cellSize = 10;
const cellColor = 255;
// const canvasWidth = width;
// const canvasHeight = height;
const canvasColor = '#000';



function setup() {
  createCanvas(windowWidth, windowWidth);
  background(canvasColor);
  noStroke();
  //colorMode(HSB);


}


function setup() {
 
  background(canvasColor);
 

  fill(cellColor);
  for (let col= 0; col < columns; col++) {
    for (let row = 0; row < rows; row++) {
      let x =  padding + (col * cellSize);
      let y = padding + (row * cellSize);
      let size = cellSize - 2;
      rect(x,y,size,size);
    }
  }
}

function mousePressed() {
  save('image.png');
}

//https://raster.ly/tutorials/pixel-grid-in-p5js