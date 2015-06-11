define([], function () {
    function BasicLogger() {
        this.writerFn = function() {

        };

        this.log = function(message) {
            this.writerFn(this.format(message));
        };

        this.format = function(string) {
            var now = new Date();
            return now.toLocaleTimeString() + " - " + string;
        }
    }

    return BasicLogger;
});
