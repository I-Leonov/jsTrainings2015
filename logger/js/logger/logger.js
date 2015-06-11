define(['./alertLogger', './consoleLogger'],
    function (alertLogger, consoleLogger) {

        var innerLog = function (logger, message) {
            logger.log(message);
        };

        var Abstract = function (logger) {
            var logFunction = innerLog.bind(this, logger);
            var enabled = false;
            var oldErrorHandler = window ? window.onerror : undefined;

            var globalErrorHandler = function (enable) {

                if (enable === true) {
                    if (enabled == true) {
                        console.log("global error handling is already enabled for this logger")
                    } else {
                        enabled = true;
                        window.onerror = function(errorMsg, url, lineNumber) {
                            if (enabled) {

                                logFunction(errorMsg);
                            }
                            oldErrorHandler(errorMsg, url, lineNumber);

                        }
                    }
                } else {
                    enabled = false;
                }

            };

            return {
                log: logFunction,
                globalErrorHandler: globalErrorHandler
            }
        };

        var addLogger = function (name, logger) {
            if (name == null) {
                console.error('name should not be null');
            } else if (name in this) {
                console.error('logger with such name is already registered');
            } else {
                this[name] = new Abstract(logger);
            }
        };

        var Console = new Abstract(consoleLogger);
        var Alert = new Abstract(alertLogger);



        return {
            Console: Console,
            Alert: Alert,
            addLogger: addLogger

        }

    });