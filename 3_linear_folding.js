/**
 * Created by Igor.Leonov on 5/26/2015.
 */
var sum = function (a, b, index, arr) {
    return a + b;
};
var linearFold = function (arr, callback, initialValue) {

    if (arguments.length == 2) {
        initialValue = 0;
    }
    for (var i = 0, length = arr.length; i < length; i++) {
        initialValue = callback(initialValue, arr[i], i, arr);
    }
    return initialValue;
};
var arr = [1, 2, 3];
console.log(linearFold(arr, sum));
console.log(linearFold(arr, sum, 2));

//ES5 alternative
console.log(arr.reduce(sum));