// 8.1
let head = {
    glasses: 1
};
let table = {
    pen: 3,
    __proto__: head
};
let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table
};
let pockets = {
    money: 2000,
    __proto__: bed
};

// 8.2
function Objj(name) {
    this.name = name;
}
let obj = new Objj('John');
let obj2 = new obj.constructor('sec');
console.log(obj2.name);

// 8.3
Function.prototype.defer = function (ms) {
    setTimeout(this, ms);
};
function f() {
    alert("Hello!");
}
f.defer(1000);

Function.prototype.defer = function (ms) {
    let f = this;
    return function (...args) {
        setTimeout(() => f.apply(this, args), ms);
    }
};
function f(a, b) {
    alert(a + b);
}
f.defer(1000)(1, 2);

// 8.4
let dictionary = Object.create(null, {
    toString: {
        value() {
            return Object.keys(this).join();
        }
    }
});