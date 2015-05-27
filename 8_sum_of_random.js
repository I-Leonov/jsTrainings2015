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
    for (var i = 0; i<arr.length; i++) {
        initialValue = callback(initialValue, arr[i], i, arr);
    }
    console.log(initialValue);
};

var curry = function(fn) {
    var paramsCount = 10;
    var oldParams = [];
    var insideCurry = function(newarg) {
        oldParams.push(newarg);
        if (oldParams.length == paramsCount) {
            fn(oldParams, sum);
        } else return insideCurry;

    };
    return insideCurry;

};

var curriedFolding = curry(linearFold);
for (var i=1; i<=10; i++) {
    var rand = Math.random();
    console.log(rand);
    curriedFolding(rand);
}
