// 4.1
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;
function isEmpty(obj) {
    for (let pr in obj) {
        return false;
    }
    return true;
}
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};
let sum = 0;
for (let pr in salaries) {
    sum += salaries[key];
}
console.log(sum);
function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] == "number") {
            obj[key] = obj[key] * 2;
        }
    }
}

// 4.4
let calculator = {
    a: 1,
    b: 2,
    sum() {
        return this.a + this.b;
    },

    mul() {
        return this.a * this.b;
    },

    read() {
        this.a = +prompt("Введите a");
        this.b = +prompt("Введите b");
    }
};
calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());

let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep() {
        alert(this.step);
        return this;
    }
}
ladder.up().up().down().up().down().showStep();


// 4.5
let obj = {};
function A() { return obj; }
function B() { return obj; }
console.log(new A() == new B());

function Calculator() {
    a: 1,
        b: 2,
            this.read = function () {
                this.a = +prompt('Введите a', 0);
                this.b = +prompt('Введите b', 0);
            };

    this.sum = function () {
        return this.a + this.b;
    };

    this.mul = function () {
        return this.a * this.b;
    };
}
let calculator = new Calculator();
calculator.read();
console.log("Sum=" + calculator.sum());
console.log("Mul=" + calculator.mul());

function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function () {
        this.value = this.value + prompt('Сколько добавить?');
    };

}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
console.log(accumulator.value);