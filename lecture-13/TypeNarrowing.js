// Type Narrowing in TypeScript
function detectType(val) {
    if (typeof val === 'string') {
        return val.toLowerCase();
    }
    return val + 3;
}
function provideId(id) {
    if (!id) {
        return new Error("ID not provided");
    }
    return id.toLowerCase();
}
function printAll(strs) {
    if (strs) {
        if (typeof strs === "object") {
            for (var _i = 0, strs_1 = strs; _i < strs_1.length; _i++) {
                var s = strs_1[_i];
                console.log(s);
            }
        }
        else if (typeof strs === "string") {
            console.log(strs);
        }
    }
}
function isAdminAcc(account) {
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
}
// this type narrowing works only with classes and not with interfaces
// new keyword is used to check object type
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
function isFish(animal) {
    return animal.swim() !== undefined;
}
function getFood(animal) {
    if (isFish(animal)) {
        animal;
        return "Fish Food";
    }
    animal;
    return "It's a Bird Food";
}
function getShape(shape) {
    if (shape.shape === 'circle') {
        return Math.PI * Math.pow(shape.radius, 2);
    }
    else if (shape.shape === 'square') {
        return Math.pow(shape.side, 2);
    }
    else {
        return shape.length * shape.width;
    }
}
function getArea(shape) {
    switch (shape.shape) {
        case "circle":
            return Math.PI * Math.pow(shape.radius, 2);
            break;
        case "square":
            return Math.pow(shape.side, 2);
            break;
        case "rectangle":
            return shape.length * shape.width;
            break;
        // It will never reach here if all cases are handled
        default:
            var _exhaustableCheck = shape;
            return _exhaustableCheck;
    }
}
