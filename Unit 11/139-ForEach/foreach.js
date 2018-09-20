function myForEach(arr, func) {
    for(var i = 0; i < arr.length; i++) {
        func(arr[i], i, arr);
    }
}

var numbers = [1, 2, 3, 4, 5];

myForEach(numbers, function(num) { 
    console.log(num);
});

Array.prototype.myForEach = function(func) {
    for(var i = 0; i < this.length; i++) {
        func(this[i], i, this);
    }
}

numbers.myForEach(function(num) {
    console.log(num);
});