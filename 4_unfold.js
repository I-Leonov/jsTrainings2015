/**
 * Created by Igor.Leonov on 5/27/2015.
 */

var tuple = function (state, element) {
    this.state = state;
    this.element = element;
};

function getLastDigit(number) {
    var rest = Math.floor(number / 10);
    var digit = number % 10;
    if (rest > 0) {
        return new tuple(rest, digit);
    } else {
        return new tuple(false, digit);
    }
}

var unfold = function (callback, initialValue) {
    var result = [];
    var state = 1;
    while (!(state === false)) {
        var callbackResult = callback(initialValue);
        result.push(callbackResult.element);
        state = callbackResult.state;
        initialValue = callbackResult.state;
    }
    return result;
};

console.log(unfold(getLastDigit, 2234563199));