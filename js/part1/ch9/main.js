// 9.1
class Clock {
    constructor({ template }) {
        this.template = template;
    }
    render() {
        let date = new Date();
        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;
        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;
        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;
        let output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);
        console.log(output);
    }
    start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    }
    stop() {
        clearInterval(this.timer);
    }
}
let clock = new Clock({ template: 'h:m:s' });
clock.start();

// 9.2
class Animal {
    constructor(name) {
        this.name = name;
    }
}
class Rabbit extends Animal {
    constructor(name) {
        super(name);
        this.created = Date.now();
    }
}
let rabbit = new Rabbit("Белый кролик");
console.log(rabbit.name);

class ExtendedClock extends Clock {
    constructor(options) {
        super(options);
        let { precision = 1000 } = options;
        this.precision = precision;
    }
    start() {
        this.render();
        this.timer = setInterval(() => this.render(), this.precision);
    }
};

// 9.3
class Rabbit extends Object {
    constructor(name) {
        super();
        this.name = name;
    }
}
let rabbit = new Rabbit("Кроль");
console.log(rabbit.hasOwnProperty('name'));

