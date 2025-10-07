// Interface in TS
var ayush = {
    dbId: 552211,
    email: "ayush@gmail.com",
    name: "Ayush",
    userId: 1,
    githubToken: "githubAyush1234",
    StartTrial: function () {
        return "Trial Started";
    },
    getCoupon: function (name, value) {
        return 10;
    }
};
var AdminAyush = {
    role: "TL",
    dbId: 552211,
    email: "ayush@gmail.com",
    name: "Ayush",
    userId: 1,
    githubToken: "githubAyush1234",
    StartTrial: function () {
        return "Trial Started";
    },
    getCoupon: function (name, value) {
        return 10;
    }
};
// ⚠️ When Not to Use Enums
// If the set of values is dynamic (e.g. fetched from an API)
// If you need more flexibility than enums allow
// When working in codebases where enums are discouraged in favor of literal union types (e.g. 'admin' | 'user' | 'guest')
