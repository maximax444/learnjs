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
 return Math.random() * (max-min) + min;
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