/**
 * Created by Igor.Leonov on 5/27/2015.
 */
var twice = function(b) {
    return  b*2;
};

var memo = function(fn) {
    var memoCache = {};
    return function(param) {
        if (!(param in memoCache)) {
            memoCache[param] = fn(param);
            console.log('put into cache')
        }
        return memoCache[param];
    }
};

var memoize = memo(twice);
console.log(memoize(1));
console.log(memoize(1));
console.log(memoize(2));
console.log(memoize(3));
console.log(memoize(2));
