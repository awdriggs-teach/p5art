# Random Numbers

P5 can create random numbers using the `random` function. It can be used with different parameters but will always return a number in decimal form.

If you want a random number between 0 and 1, use `random()` with no parameters. This will return a random number like this `0.303114058432957`.

If you want a random number between 0 and some other number, you can add one parameter. `random(10)` will return a number between 0 and 10, for example `7.704012912274932`.

If you want a random number between some range, you can add two parameters. `random(20, 40)` will return a random number between 20 and 40, for example `25.76083288444286`.

You will notice that `random` always returns a decimal. If you just want whole numbers you can use `floor`. 

This code will give a whole number between 0 and 10. It could give back 0 but will never give 10.
```javascript
let num = floor(random(10));
print(num);
```
 
You can use random wherever you could use a number. This code will put a random circle on the canvas for each loop of draw.
```javascript
//background(220); //stop the background so the circles appear
ellipse(random(width), random(height), 20, 20);
```
![random circle placement](random1.png) 

This code will randomly size the circle between 50 and 350.
```
ellipse(width/2, height/2, random(50, 350);
```
![random size](random2.gif)

# Random Color
Use this code to make a random color.
```javascript
let r = random(255);
let g = random(255);
let b = random(255);
fill(r, g, b);
```
 
  
