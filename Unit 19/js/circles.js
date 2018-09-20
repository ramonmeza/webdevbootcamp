var circles = [];

// Key input
function onKeyDown(event) {
    if(keyData[event.key]) {
        // Play sound
        keyData[event.key].sound.play();

        // Create random point to spawn circle
        var maxPoint = Point.max(view.size.width, view.size.height);
        var randomPoint = Point.random();
        var point = maxPoint * randomPoint;

        // Create random radius
        var maxRadius = 800;
        var radius = Math.floor(Math.random() * maxRadius);

        // Create circle
        circles.push(new Path.Circle(point, radius));

        // Random color
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        var color = "rgb(" + r + ", " + g + ", " + b + ")";

        // Color in the circle
        circles[circles.length - 1].fillColor = color;
    }
}

// Animation
function onFrame(event) {
    circles.forEach(function(cir, index) {
        // Animate the hue
        cir.fillColor.hue += 1;

        // Animate the scale
        cir.scale(0.9);

        // If the scale is too small to see, remove it from the array
        if(cir.length < 1) {
            RemoveCircle(index);
        }
    });

 //   console.clear();
    console.log(circles.length);
}

// Delete dead circles
function RemoveCircle(index) {
    circles.splice(index, 1);
}