define(['../js/logger/basicLogger.js'], function (basicLogger) {

    var logDiv;
    var getOrCreateLogDiv = function () {
        if (!logDiv && window) {
            logDiv = document.createElement('div');
            logDiv.style.cssText = 'width:500px;height:200px; overflow:auto; padding:0px; opacity:0.6;z-index:100;background:red;bottom: 0px;left: 0px;';
            window.document.body.appendChild(logDiv);
        }
        return logDiv;
    };

    function WindowLogger(basicLogger) {
        basicLogger.call(this);
        this.writerFn = function (message) {
            if (getOrCreateLogDiv()) {
                logDiv.innerHTML += message +'</br>';
                logDiv.scrollTop = logDiv.scrollHeight;
            }
        }
    }

    return new WindowLogger(basicLogger);
});