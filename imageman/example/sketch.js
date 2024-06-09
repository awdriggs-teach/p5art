let mona; //declare a variable for use later on.
let sqSize, numSqX, numSqY;
let thumbs = []; //empty array to hold thumbnails

function preload() {
  mona = loadImage('./mona-lg.jpg');
}

function setup() {
  createCanvas(mona.width, mona.height); //make the canvas size match the image size
  // print(width, height) //test canvas size

  sqSize = mona.width / 10;
  numSqX = round(width / sqSize);
  numSqY = round(height / sqSize);

  print(sqSize);
  noFill();
  stroke(255);
  noLoop();
}

function draw() {
  background(255);
  // image(mona, 0, 0); //place mona at origin

   
  // utility - draw a grid on mona
   // for(let i = 0; i < numSqX; i++){
   //   let x = i * sqSize;
   //   line(x, 0, x, height); //draw a horizontal line
   // }

   // for(let j = 0; j < numSqY; j++){
   //   let y = j * sqSize;
   //   line(0, y, width, y);
   // }

  //create a small grid of sub-images 
  for(let i = 0; i < numSqX; i++){
    let x = i * sqSize + sqSize/2;

    for(let j = 0; j < numSqY; j++){
      let y = j * sqSize + sqSize/2;
      let thumb = sqSize/4;
      thumbs.push(mona.get(x - thumb/2, y - thumb/2, thumb, thumb)); //grab a thumb nail from the image
    }
  }

    //draw the image of just thumbnails

    let x = 0;
    let y = 0;
    let count = 0;

    for(let i = 0; i < thumbs.length; i++){

      let thumb = thumbs[i];
      image(thumb, x, y, sqSize, sqSize);

      y += sqSize;

      count++;

      if(count % numSqY == 0){ //wrap every 15 rows
        x += sqSize;
        y = 0;
      }
    }
}

function mousePressed(){
   saveCanvas('bitmona', 'jpg');
}
 
