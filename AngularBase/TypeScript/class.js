var Server = /** @class */ (function () {
    function Server(name, ip) {
        this.status = "working";
        this.name = name,
            this.ip = ip;
    }
    Server.prototype.turnOn = function () {
        this.status = "working";
    };
    Server.prototype.turnOff = function () {
        this.status = "offing";
    };
    Server.prototype.hetStatus = function () {
        return this.status;
    };
    Server.VERSION = "1.5.7";
    return Server;
}());
