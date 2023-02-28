# Drawing Rectangles

In p5, we use the `rect` function to create squares and rectangles.

The `rect` function needs 4 parameters fro placement and size.

```javascript
rect(x, y, width, height);
```

![rectangle diagram](.imgs/rect.jpg)

* `x` - a number, the horizontal position on the screen
* `y` - a number, the vertical position on the screen
* `width` - a number, how wide the rectangle should be.
* `height` - a number, how tall the rectangle should be.

A rectangle is drawn with the top left corner at the x and y location.

Here is the code to draw a square at the location 100, 100 with a size of 200.
```javascript
rect(100, 100, 200, 200);
```

Here is how to draw a rectangle that is wider than it is tall.
```javascript
rect(100, 100, 200, 100);
```

## Try it out!
Try drawing 3 different squares or rectangles in the [p5 editor](https://editor.p5js.org/)

  
