
define(['./alertLogger', './consoleLogger', './windowLogger'],
    function (alertLogger, consoleLogger, windowLogger) {

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
        var Window = new Abstract(windowLogger);



        return {
            Console: Console,
            Alert: Alert,
            Window: Window
        }

    });