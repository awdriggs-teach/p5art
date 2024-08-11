// This bit sets the precision of the shader. In this case we'll use a medium percision.
// A higher percision will give a better output, but will be slower.
#ifdef GL_ES
precision mediump float;
#endif

// Here the "uniforms" from p5 are declared so we can use them.
uniform vec2 u_resolution;
uniform vec2 u_mouse;

// This is the same variable that was declared in the vertex shader
// Declaring it here necessary to receive the data from the vertex shader.
varying vec2 vTexCoord;

void main() {

  // normalizes mouse coordinates as a value between 0.0 and 1.0
  float n_mouse = u_mouse.x / u_resolution.x;

  // copy the vTexCoord
  // vTexCoord is a value that goes from 0.0 - 1.0 depending on the pixels location
  // i.e. (0.5, 0.5) would be the middle fo the screen.
  // we can use it to access every pixel on the screen
  vec2 coord = vTexCoord;

  // The x values for red channel, y values for blue channel
  // The green channel is the normalized mouse position!
  vec3 color = vec3(coord.x, n_mouse, coord.y);

  gl_FragColor = vec4(color, 1.0 ); //This sets the color of a pixel.
}
