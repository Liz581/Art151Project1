class Shapes {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  show() {
    stroke(2);
    square(this.x, this.y, 100);
  }
}

let arr2 = [];
function setup() {
  createCanvas(1000, 1000);
  alert("Art151: Project 1 \nCreated by Lisset Rico");
  for (let i=0; i < 10; i++) {
    arr2[i] = [];
    for (let j=0; j < 100; j++) {
      arr2[i][j] = new Shapes(i*100, j);
    }
  }
}

function draw() {
  background(255, 211, 130);
  strokeWeight(0.5);

  for(let i=0; i < arr2.length; i++) {
    for(let j=0; j < arr2[i].length; j++) {
      arr2[i][j].show();
    }
  }
  
}