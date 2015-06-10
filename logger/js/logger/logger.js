
define(['./alertLogger', './consoleLogger'],
    function (alertLogger, consoleLogger) {

        var innerLog = function(logger, message) {
            logger.log(message);
        };

        var Abstract = function(logger) {
            var logFunction = innerLog.bind(this, logger);
            return {
                log : logFunction
            }
        } ;
        var Console = new Abstract(consoleLogger);

        var Alert = new Abstract(alertLogger);

        return {
            Console: Console,
            Alert: Alert
        }

    });