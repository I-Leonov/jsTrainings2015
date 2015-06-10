define([], function () {
    function BasicLogger() {
        this.writerFn = function() {

        };

        this.log = function(message) {
            this.writerFn(message);
        }
    }

    return BasicLogger;
});
