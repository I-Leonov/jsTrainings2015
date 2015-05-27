/**
 * Created by Igor.Leonov on 5/26/2015.
 */
function curryTest(a,b,c) {
    console.log(a + ' ' + b + ' ' +c);
}

var curry = function(fn) {
    var paramsCount = fn.length;
    var oldParams = [];
    var insideCurry = function(newarg) {
        oldParams.push(newarg);
        if (oldParams.length == paramsCount) {
            fn.apply(null, oldParams);
        } else return insideCurry;

    };
    return insideCurry;

};
var a = curry(curryTest);
a('1')('2')('test');