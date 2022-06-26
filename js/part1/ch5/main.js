// 5.2
let x = +prompt("Введите первое число");
let y = +prompt("Введите второе число");
alert(a + b);

function readNumber() {
    let num;
    while (true) {
        num = prompt("Введите число");
        if (isFinite(num)) {
            break;
        }
    }
    if (num === null || num === '') return null;
    return Number(num);
}
console.log(`Число: ${readNumber()}`);

function random(min, max) {
    return Math.random() * (max - min) + min;
}
function randomInteger(min, max) {
    let rand = Math.random() * (max - min + 1) + min - 0.5;
    return Math.round(rand);
}

//5.3
function ucFirst(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
}

function checkSpam(str) {
    let lower = str.toLowerCase();
    return lower.includes('viagra') || lowerStr.includes('xxx');
}

function truncate(str, maxlength) {
    return (str.length > maxlength) ? str.slice(0, maxlength - 1) + '…' : str;
}

function extractCurrencyValue(str) {
    return +(str.slice(1));
}

// 5.4
let styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
styles[Math.floor((styles.length - 1) / 2)] = "Классика";
console.log(styles.shift());
styles.unshift("Рэп", "Регги");

function sumInput() {
    let numbers = [];
    while (true) {
        let value = prompt("Введите число");
        if (!isFinite(value) || value === "" || value === null) {
            break;
        }
        numbers.push(Number(value));
    }
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}
console.log(sumInput());

function getMaxSubSum(arr) {
    let maxSum = 0;
    let nowSum = 0;
    for (let it of arr) {
        nowSum += it;
        maxSum = Math.max(maxSum, nowSum);
        if (nowSum < 0) {
            nowSum = 0;
        }
    }
    return maxSum;
}

// 5.5
function camelize(str) {
    return str.split('-').map(
        (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    ).join('');
}

function filterRange(arr, a, b) {
    return arr.filter(item => (a <= item && item <= b));
}
let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
console.log(filtered);
console.log(arr);

function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];
        if (val < a || val > b) {
            arr.splice(i, 1);
            i--;
        }
    }
}
let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4);
console.log(arr);

let arr = [5, 2, 1, -10, 8];
arr.sort((a, b) => b - a);

function copySorted(arr) {
    return arr.slice().sort();
}
let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);
console.log(sorted);
console.log(arr);

function Calculator() {
    this.methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b
    };
    this.calculate = function (str) {
        let split = str.split(' '),
            a = +split[0],
            op = split[1],
            b = +split[2]
        if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }
        return this.methods[op](a, b);
    }
    this.addMethod = function (name, func) {
        this.methods[name] = func;
    };
}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };
let users = [vasya, petya, masha];
let names = users.map(item => item.name);

let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };
let users = [vasya, petya, masha];
let usersMapped = users.map(user => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id
}));

function sortByAge(arr) {
    arr.sort((a, b) => a.age > b.age ? 1 : -1);
}

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

function unique(arr) {
    let res = [];
    for (let str of arr) {
        if (!res.includes(str)) {
            res.push(str);
        }
    }
    return res;
}

// 5.7
function unique(arr) {
    return Array.from(new Set(arr));
}

function aclean(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        let sorted = arr[i].toLowerCase().split("").sort().join("");
        obj[sorted] = arr[i];
    }
    return Object.values(obj);
}

let map = new Map();
map.set("name", "John");
let keys = Array.from(map.keys());
keys.push("more");
console.log(keys);

// 5.9
function sumSalaries(salaries) {
    let sum = 0;
    for (let salary of Object.values(salaries)) {
        sum += salary;
    }
    return sum;
}
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};
console.log(sumSalaries(salaries));

function count(obj) {
    return Object.keys(obj).length;
}

// 5.10
let user = {
    name: "John",
    years: 30
};
let { name, years: age, isAdmin = false } = user;
console.log(name);
console.log(age);
console.log(isAdmin);

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};
function topSalary(salaries) {
    let max = 0;
    let maxName = null;
    for (const [name, salary] of Object.entries(salaries)) {
        if (max < salary) {
            max = salary;
            maxName = name;
        }
    }
    return maxName;
}
console.log(topSalary(salaries));

// 5.11
let date = new Date(2012, 1, 20, 3, 12);
alert(date);

function getWeekDay(date) {
    let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
    return days[date.getDay()];
}
let date = new Date(2014, 0, 3);
alert(getWeekDay(date));

function getLocalDay(date) {
    let day = date.getDay();
    if (day == 0) {
        day = 7;
    }
    return day;
}

function getDateAgo(date, days) {
    let dateCopy = new Date(date);
    dateCopy.setDate(date.getDate() - days);
    return dateCopy.getDate();
}

function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
}

function getSecondsToday() {
    let d = new Date();
    return d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
}

function getSecondsToTomorrow() {
    let now = new Date();
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    let diff = tomorrow - now;
    return Math.round(diff / 1000);
}

function formatDate(date) {
    let diff = new Date() - date;
    if (diff < 1000) {
        return 'прямо сейчас';
    }
    if (diff < 60000) {
        return Math.floor(diff / 1000) + ' сек. назад';
    }
    if (diff < 360000) {
        return Math.floor(diff / 60000) + ' мин. назад';
    }
    let d = date;
    d = [
        '0' + d.getDate(),
        '0' + (d.getMonth() + 1),
        '' + d.getFullYear(),
        '0' + d.getHours(),
        '0' + d.getMinutes()
    ].map(component => component.slice(-2));
    return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
}

alert(formatDate(new Date(new Date - 1)));
alert(formatDate(new Date(new Date - 30 * 1000)));
alert(formatDate(new Date(new Date - 5 * 60 * 1000)));
alert(formatDate(new Date(new Date - 86400 * 1000)));

// 5.12
let user = {
    name: "Василий Иванович",
    age: 35
};
let new = JSON.parse(JSON.stringify(user));

let room = {
    number: 23
};

let meetup = {
    title: "Совещание",
    occupiedBy: [{ name: "Иванов" }, { name: "Петров" }],
    place: room
};

room.occupiedBy = meetup;
meetup.self = meetup;

alert(JSON.stringify(meetup, function replacer(key, value) {
    return (key != "" && value == meetup) ? undefined : value;
}));

/*
{
  "title":"Совещание",
  "occupiedBy":[{"name":"Иванов"},{"name":"Петров"}],
  "place":{"number":23}
}
*/