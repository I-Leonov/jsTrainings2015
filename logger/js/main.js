define(['logger/logger','logger/windowLogger'],
    function (logger,windowLogger) {
       logger.Console.log("test");
        logger.Alert.globalErrorHandler(true);
        logger.Asdfg.globalErrorHandler(true);

       //logger.Alert.log("test");
       //logger.Window.log("test");
       //logger.Window.log("test2");

    });
