
class Say {
    constructor(name = 'hello') {
        this.name = name;
    }
    
    sayHello() {
        return `Hello ${this.name}!`;
    }

    sayGoodbye() {
        return `Goodbye ${this.name}!`;
    }
}

const talk = new Say('Keith');

let helloKeith = talk.sayHello('Keith');
let goodbyeKeith = talk.sayGoodbye('Keith');

console.log(helloKeith);
console.log(goodbyeKeith);

