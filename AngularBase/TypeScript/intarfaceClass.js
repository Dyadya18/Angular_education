var Vlad = /** @class */ (function () {
    function Vlad(name, age) {
        this.name = name;
        this.age = age;
    }
    Vlad.prototype.getInfo = function () {
        return this.name + " " + this.age;
    };
    Vlad.prototype.setDate = function () {
        this.date = Date.now() - this.age;
    };
    return Vlad;
}());
