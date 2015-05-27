/**
 * Created by Igor.Leonov on 5/27/2015.
 */
var takeElement = function(arr, condition) {
    for (var i=0; i<arr.length; i++) {
        if (condition(arr[i])) {
            return arr[i];
        }
    }
};

var arr = [1,2,3];
var element = takeElement(arr, function(a) {return a>2});
console.log(element);
