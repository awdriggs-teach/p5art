// 2D gradient background images
// heat is red (hot toward the top)
// humidity is blue (humid toward the right)

var img;

let r, g, b;


function setup() {
  createCanvas(windowWidth, windowHeight);
  img = createImage(width, height);
}

function draw() {
  img.loadPixels(); 
  g = map(mouseX, 0, width, 0, 255);
  for(var x = 0; x < img.width; x++) {
    r = map(x, 0, width, 0, 255);
    for(var y = 0; y < img.height; y++) {  
      b = map(y, 0, height, 0, 255);
      img.set(x, y, [r, g, b, 255]); 
    }
  }
  img.updatePixels();
  
  background(img);
    print(frameRate());
}