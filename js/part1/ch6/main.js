// 6.1
function sumTo(n) {
    if (n == 1) return 1;
    return n + sumTo(n - 1);
}
console.log(sumTo(3100));

function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}
console.log(factorial(5));

function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};
function printList(list) {
    console.log(list.value);
    if (list.next) {
        printList(list.next);
    }
}
function printList(list) {
    let tmp = list;
    while (tmp) {
        console.log(tmp.value);
        tmp = tmp.next;
    }
}
printList(list);

function printReverseList(list) {
    if (list.next) {
        printReverseList(list.next);
    }
    console.log(list.value);
}
function printReverseList(list) {
    let arr = [];
    let tmp = list;
    while (tmp) {
        arr.push(tmp.value);
        tmp = tmp.next;
    }
    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}
printReverseList(list);

//6.3
function sum(a) {
    return function (b) {
        return a + b;
    };
}
alert(sum(1)(2));

function inBetween(a, b) {
    return function (x) {
        return x >= a && x <= b;
    };
}
function inArray(arr) {
    return function (x) {
        return arr.includes(x);
    };
}

function byField(field) {
    return (a, b) => a[field] > b[field] ? 1 : -1;
}

function makeArmy() {
    let shooters = [];
    for (let i = 0; i < 10; i++) {
        let shooter = function () {
            console.log(i);
        };
        shooters.push(shooter);
    }
    return shooters;
}
let army = makeArmy();
army[0]();
army[5]();

// 6.6
function makeCounter() {
    let count = 0;
    function counter() {
        return count++;
    }
    counter.set = value => count = value;
    counter.decrease = () => count--;
    return counter;
}

function sum(a) {
    let currentSum = a;
    function f(b) {
        currentSum += b;
        return f;
    }
    f.toString = function () {
        return currentSum;
    };
    return f;
}
console.log(sum(1)(2));
console.log(sum(5)(-1)(2));
console.log(sum(6)(-1)(-2)(-3));
console.log(sum(0)(1)(2)(3)(4)(5));

// 6.8
function printNumbers(from, to) {
    let curr = from;
    let timerId = setInterval(function () {
        alert(curr);
        if (curr == to) {
            clearInterval(timerId);
        }
        curr++;
    }, 1000);
}
printNumbers(5, 10);

function printNumbers(from, to) {
    let curr = from;
    setTimeout(function go() {
        alert(curr);
        if (curr < to) {
            setTimeout(go, 1000);
        }
        curr++;
    }, 1000);
}
printNumbers(5, 10);

// 6.9
function spy(func) {
    function wrapper(...args) {
        wrapper.calls.push(args);
        return func.apply(this, arguments);
    }
    wrapper.calls = [];
    return wrapper;
}

function delay(f, ms) {
    return function () {
        setTimeout(() => f.apply(this, arguments), ms);
    };
}
let f1000 = delay(alert, 1000);
f1000("test");

function debounce(f, ms) {
    let isCooldown = false;
    return function () {
        if (isCooldown) return;
        f.apply(this, arguments);
        isCooldown = true;
        setTimeout(() => isCooldown = false, ms);
    };
}

function throttle(func, ms) {
    let isThrottled = false,
        savedArgs,
        savedThis;
    function wrapper() {
        if (isThrottled) {
            savedArgs = arguments;
            savedThis = this;
            return;
        }
        func.apply(this, arguments);
        isThrottled = true;
        setTimeout(function () {
            isThrottled = false;
            if (savedArgs) {
                wrapper.apply(savedThis, savedArgs);
                savedArgs = savedThis = null;
            }
        }, ms);
    }
    return wrapper;
}

// 6.10
askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

askPassword(() => user.login(true), () => user.login(false));