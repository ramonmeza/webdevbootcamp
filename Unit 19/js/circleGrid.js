var radius = 10;
var spacing = 100;

for(var x = 0; x < 10; x++) {
    for(var y = 0; y < 10; y++) {
        // Create circle
        var circle = new Path.Circle(new Point(x * spacing, y * spacing), radius);
        
        // Create horizontal gradient
        var r = Math.floor(x * (255 / 10));
        var g = Math.floor(x * (100 / 10));
        var b = Math.floor(x * (190 / 10));

        // Change the circle's color
        circle.fillColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
    }
}

