/**
 * Created by Igor.Leonov on 5/27/2015.
 */
var filterCallback = function (element) {
    return element % 2 == 0;

};
var filter = function (arr, callback) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
};
var arr = [1, 2, 3, 4, 5, 6];

var result = filter(arr, filterCallback);

console.log(arr + ' -> ' + result);

//ES5 alternative
arr.filter(filterCallback);
