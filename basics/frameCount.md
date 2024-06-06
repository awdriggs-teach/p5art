# Animation with frameCount

There is a built in variable called `frameCount`. This is the number of how many frames have been drawn with the `draw()` loop. 

Here is an example that uses the `frameCount` to change the size of a circle. The circle gets bigger with each frame of the animation.

```javascript
ellipse(width/2, height/2, frameCount);
```

![circle getting bigger](./imgs/frameCount1.gif)
 
p5 tries to draw 60 frames per second. So the circle will get big fast! After 5 seconds the circle will be about 300 pixels in size.
 
  

