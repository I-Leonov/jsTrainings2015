/**
 * Created by Igor.Leonov on 5/27/2015.
 */

var myFunction = function (a, b, c) {
    console.log(a + ' ' + b + ' ' + c);
};

var lazy = function () {
    var fn = arguments[0];
    var args = Array.prototype.slice.call(arguments, 1);
    return function () {
        fn.apply(null, args);
    }
};

var lazyOutput = lazy(myFunction, 'test', 1, 2);

console.log('before call');
lazyOutput();