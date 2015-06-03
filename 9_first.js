/**
 * Created by Igor.Leonov on 5/27/2015.
 */
var takeElement = function(arr, condition) {
    if (condition == null) {
        return arr[0];
    }
    for (var i = 0, length = arr.length; i < length; i++) {
        if (condition(arr[i])) {
            return arr[i];
        }
    }
};

var arr = [1,2,3];
var element = takeElement(arr, function(a) {return a>2});
console.log(element);
element = takeElement(arr);
console.log(element);
