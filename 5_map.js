/**
 * Created by Igor.Leonov on 5/27/2015.
 */
var myFun = function (element) {
    return 2 * element;
};

var map = function (arr, fn) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        result.push(fn(arr[i]));
    }
    return result;
};
var arr = [1, 2, 3];

var result = map(arr, myFun);

console.log(arr + ' -> ' + result);

//ES5 alternative
arr.map(myFun);