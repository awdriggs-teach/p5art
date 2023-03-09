# Mouse Events

In this video, I show how to draw something if the mouse is pressed.

[Link to Video](https://youtu.be/_Zq0J4Q3czY)
 
Here I'm using an if statement. The if statement is like the if/else block in Scratch. Pay special attention to the `{}` brackets, they are used to group a block of code together.  

```javascript
if(something-true){
  print('true')//do this!
} else {
  print('not true') //do this!
}
```

Inside the if statement there needs to be a statement that can be either true or false. In p5, we call these "boolean statements." 

Here are some examples of boolean statements...
- `mouseX < 200`, this will be true if the mouse x position is less than 200, but false if it is greater than or equal to 200.
- `mouseX == 200`, this will be true *only* if the mouse x is exactly 200.
- `mouseX >= 200`, this will be true if the mouse x is greater than or equal to 200. 

p5 has a built in variable named `mouseIsPressed`. This variable will be `true` when the mouse is pressed, but `false` if it is not.

We can use this built-in variable to change what we are drawing depending on mouse. In this example I draw a circle if the mouse is down and a square if it is not.
 
```javascript
if(mouseIsPressed){
    ellipse(mouseX, mouseY, 100, 100)
} else {
    rect(mouseX, mouseY, 100, 100)
}
```  


