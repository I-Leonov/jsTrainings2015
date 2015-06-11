define(['logger/logger','logger/windowLogger'],
    function (logger,windowLogger) {
       logger.Console.log("test");
        logger.addLogger("Window", windowLogger);
        logger.Window.globalErrorHandler(true);
        logger.Alert.globalErrorHandler(true);
        logger.Window.log("test");
        logger.Asdfg.globalErrorHandler(true);


       //logger.Alert.log("test");
       //logger.Window.log("test");
       //logger.Window.log("test2");

    });
