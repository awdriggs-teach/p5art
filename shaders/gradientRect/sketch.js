function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  background(220);
  let g = map(mouseX, 0, width, 0, 255);
  for(let x = 0; x < width; x+=1){
    let r = map(x, 0, width, 0, 255);
    for(let y = 0; y < height; y+=1){
      let b = map(y, 0, height, 0, 255);
      // fill(r, 0, b);
      // rect(x,y, 1, 1);
      stroke(r, g, b);
      point(x,y);
    }
  }
  
  console.log(frameRate()); //see the framerate
}