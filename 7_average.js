/**
 * Created by Igor.Leonov on 5/27/2015.
 */
var sum = function (a, b, index, arr) {
    return a + b;
};
var linearFold = function (arr, callback, initialValue) {

    if (initialValue == null) {
        initialValue = 0;
    }
    for (var i = 0, length = arr.length; i < length; i++) {
        initialValue = callback(initialValue, arr[i], i, arr);
    }
    return initialValue;
};

var filterCallback = function (element) {
    return element % 2 == 0;

};
var filter = function (arr, callback) {
    var result = [];
    for (var i = 0, length = arr.length; i < length; i++) {
        if (callback(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
};
var arr = [1, 23, 2, 6, 12, 0];

var filterRes;
var result = linearFold(filterRes = filter(arr, filterCallback), sum)/filterRes.length;

console.log(arr + ' -> ' + result);
