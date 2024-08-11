let theShader; //a variable to hold or shader

function preload(){
  // load the shader with the vert and frag file
  theShader = loadShader('shader.vert', 'shader.frag');
}

function setup() {
  // disables scaling for retina screens which can create inconsistent scaling between displays
  pixelDensity(1);
  
  // shaders require WEBGL mode to work
  createCanvas(windowWidth, windowHeight, WEBGL);
  noStroke();
}

function draw() {  
  shader(theShader); // shader() sets the active shader with our shader

  //uniforms are how we pass data from p5 to the shader.
  theShader.setUniform("u_resolution", [width, height]); //this tells the shader the size of the canvas
  theShader.setUniform("u_mouse",[mouseX, 0]); //this tells the shader where the mouse is at this moment.

  // rect gives us some geometry on the screen
  rect(0,0,width, height);

  console.log(frameRate());
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
