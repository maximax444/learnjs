class FormatError extends SyntaxError {
    constructor(message) {
        super(message);
        this.name = "FormatError";
    }
}
let err = new FormatError("ошибка форматирования");

console.log(err.message);
console.log(err.name);
console.log(err.stack);
console.log(err instanceof SyntaxError);