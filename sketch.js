// class Grid {
//   constructor()
// }

function inside(x, y, w, h){
  if(mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
   return true; 
  } else {
   return false; 
  }
 }

function mousePressed() {
  // Turn red
  if (val1 === 0 && val2 === 0 && val3 === 0) {
    val1 = 255;
  }
  // Turn orange
  else if (val1 === 255 && val2 === 0 && val3 === 0) {
    val1 = 255;
    val2 = 127;
    val3 = 0;
    fill(val1, val2, val3);
  }
  // Turn yellow
  else if (val1 === 255 && val2 === 127 && val3 === 0) {
    val1 = 255;
    val2 = 255;
    val3 = 0;
  }
  // Turn green
  else if (val1 === 255 && val2 === 255 && val3 === 0) {
    val1 = 0;
    val2 = 255;
    val3 = 0;
  }
  // Turn blue
  else if (val1 === 0 && val2 === 255 && val3 === 0) {
    val1 = 0;
    val2 = 0;
    val3 = 255;
  }
  // Turn purple
  else if (val1 === 0 && val2 === 0 && val3 === 255) {
    val1 = 148;
    val2 = 0;
    val3 = 211;
  }
  // Turn pink
  else if (val1 === 148 && val2 === 0 && val3 === 211) {
    val1 = 255;
    val2 = 0;
    val3 = 255;
    fill(255, 0, 255);
  }
  // Turn brown
  else if (val1 === 255 && val2 === 0 && val3 === 255) {
    val1 = 87;
    val2 = 65;
    val3 = 47;
  }
  else {
    val1 = 0;
    val2 = 0;
    val3 = 0;
  }
}

let val1 = 0;
let val2 = 0;
let val3 = 0;
let arr = [];
function setup() {
  createCanvas(1000, 1000);
  alert("Art151: Project 1 \nCreated by Lisset Rico\n This project begins with a black and white oscillating grid, as you press on the squares the colors will change.");
  for (let i=0; i < 100; i++) {
    arr.push(i);
  }
}

function draw() {
  background(255);

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      let x = j *100;
      let y = i *100;
      let index = i * 10 + j; // find the index
      
      if (inside(x, y, 100,100)){
        // were inside
        fill(val1, val2, val3);
      }
      else {
        noFill();
      }

      stroke(0);
      rect(x, y, 100, 100);
    }
  }
  
  // for(let i =0; i < height; i++){
  //   colorMode(HSB);
  //   let h = map(i, 0, height, 100, 180);
  //   stroke(h, 80,80);
  //   line(700, i, 1000, i);
  // }
}