// Classes in TypeScript and the modifiers (public , private , readonly , )
var User = /** @class */ (function () {
    function User(name, email, age) {
        // this property cannot be changed but it can be accessed outside the class
        this.country = "India";
        this.name = name;
        this.email = email;
        this.age = age;
    }
    return User;
}());
var ayush = new User("Ayush", "ayushex@.com", 22);
// with this way of defining class , you dont have to write properties and constructor separately
var Empire = /** @class */ (function () {
    function Empire(cname, population, language, militaryPower) {
        if (militaryPower === void 0) { militaryPower = 1000; }
        this.cname = cname;
        this.population = population;
        this.language = language;
        this.militaryPower = militaryPower;
    }
    Object.defineProperty(Empire.prototype, "EmpirePopulation", {
        get: function () {
            return "The population of ".concat(this.cname, " is ").concat(this.population);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Empire.prototype, "MilitaryPower", {
        // private properties cannot be accessed directly so we can create a getter and setter method to access and modify the private property
        get: function () {
            return "The Military power of ".concat(this.cname, " is ").concat(this.militaryPower, " forces");
        },
        // set method don't return anything nor have any data type defined
        set: function (power) {
            if (power <= 1000) {
                throw new Error("Military power is less than or same as before");
            }
            this.militaryPower = power;
        },
        enumerable: false,
        configurable: true
    });
    // private method cannot be accessed outside the class
    Empire.prototype.display = function () {
        return "The Empire ".concat(this.cname, " speaks ").concat(this.language);
    };
    return Empire;
}());
// Error : cannot assign to 'country' because it have read-only property of TypeScript
// ayush.country = "Japan" 
