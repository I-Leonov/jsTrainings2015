define(['../js/logger/basicLogger.js'], function (basicLogger) {
    function ConsoleLogger(basicLogger) {
        basicLogger.call(this);
        this.writerFn = function (message) {
            console.log(message);
        }
    }

    return new ConsoleLogger(basicLogger);
});