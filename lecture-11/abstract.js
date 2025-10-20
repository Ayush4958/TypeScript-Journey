// abstract is used to define classes that cannot be instantiated directly it meeans that you cannot create an object of abstract class
// abstract classes are usually used as base classes from which other classes are derived
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(name, species, gender) {
        this.name = name;
        this.species = species;
        this.gender = gender;
    }
    return Animal;
}());
// below will give error as we cannot create object of abstract class
// const dog = new Animal("James" , "Monkey" , "Male")
// we have to extend the abstract class and create object of derived class
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, species, gender, sound) {
        var _this = _super.call(this, name, species, gender) || this;
        _this.name = name;
        _this.species = species;
        _this.gender = gender;
        _this.sound = sound;
        return _this;
    }
    Dog.prototype.makeSound = function () {
        return "The Dog makes ".concat(this.sound);
    };
    return Dog;
}(Animal));
