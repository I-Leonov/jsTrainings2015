/**
 * Created by Igor.Leonov on 5/26/2015.
 */

function sum() {
    var args = Array.prototype.slice.call(arguments);
    var sum = 0;
    for (var i=0; i<args.length; i++) {
        sum += +args[i];
    }
    return sum;
}

function partial(fn) {
    var args = Array.prototype.slice.call(arguments,1);

    return function() {
        var myargs = Array.prototype.slice.call(arguments);
        return fn.apply(this, args.concat(myargs));
    };

}


var func = partial(sum,1,2);
console.log(func(2,3));