// 2.1
alert("Я JavaScript!");

// 2.4
let admin;
let name;
name = "Джон";
admin = name;
alert(admin);

// 2.6
let name2 = prompt('Ваше имя')
alert(`Имя: ${name2}`)

// 2.10
let jsName = prompt('Какое "официальное" название JavaScript?');
if (jsName == "ECMAScript") {
    alert("Верно!");
} else {
    alert("Не знаете? ECMAScript!");
}
let num = Number(prompt('Введите число'));
if (num > 0) {
    alert(1);
} else if (num < 0) {
    alert(-1);
} else {
    alert(0);
}
let result = (a + b < 4) ? 'Мало' : 'Много';
let message =
    (login == 'Сотрудник') ? 'Привет' :
        (login == 'Директор') ? 'Здравствуйте' :
            (login == '') ? 'Нет логина' : '';

// 2.11
let age = 13;
if (age <= 90 && age >= 14) {
    alert(1);
}
if (!(age >= 14 && age <= 90)) {
    alert(1);
}
if (age < 14 || age > 90) {
    alert(1);
}
let userLogin = prompt("Кто там?");
if (userLogin === null || userLogin === '') {
    alert("Отменено");
} else if (userLogin === "Админ") {
    let password = prompt("Пароль?");
    if (password === "Я главный") {
        alert("Здравствуйте!");
    } else if (password === "" || password === null) {
        alert("Отменено");
    } else {
        alert("Неверный пароль");
    }
} else {
    alert("Я вас не знаю");
}

// 2.13
for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}
let j = 0;
while (j < 3) {
    alert(`number ${j}!`);
    j++;
}
let num2;
while (true) {
    num2 = prompt("Введите число больше 100?");
    if (num2 > 100 && !(num2 === null || num2 === '')) {
        break;
    }
}

let n = 10;
let prime = false;

for (let i = 2; i <= n; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            prime = false;
            break;
        }
        prime = true;
    }
    if (prime === true || i == 2) {
        console.log(i);
    }

}

// 2.14
if (browser == 'Edge') {
    alert("You've got the Edge!");
} else if (browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari' || browser == 'Opera') {
    alert('Okay we support these browsers too');
} else {
    alert('We hope that this page looks ok!');
}
const number = +prompt('Введите число между 0 и 3');

switch (number) {
    case 0:
        alert('Вы ввели число 0');
        break;
    case 1:
        alert('Вы ввели число 1');
        break;
    case 2:
    case 3:
        alert('Вы ввели число 2, а может и 3');
        break;
}

// 2.15
function checkAge(age) {
    return (age > 18) ? true : confirm("Родители разрешили?");
}
function min(a, b) {
    if (a >= b) {
        return b;
    } else {
        return a;
    }
}
function pow(x, n) {
    let res = x;
    for (let i = 1; i < n; i++) {
        res = res * x;
    }
    return res;
}

let x = prompt("Введите x");
let n = prompt("Введите n");

if (n > 1) {
    alert(pow(x, n));
}

// 2.17
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

ask(
    "Вы согласны?",
    () => alert("Вы согласились."),
    () => alert("Вы отменили выполнение.")
);