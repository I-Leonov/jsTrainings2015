define(['../js/logger/basicLogger.js'], function (basicLogger) {

    function AlertLogger(basicLogger) {
        basicLogger.call(this);

        this.writerFn = function (message) {
            alert(message);
        }
    }
    return new AlertLogger(basicLogger);
});