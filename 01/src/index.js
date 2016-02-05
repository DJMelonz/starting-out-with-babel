
function sayHello(name = 'World') {
    return `Hello ${name}!`;
}

function sayGoodbye(name = 'World') {
    return `Goodbye ${name}!`;
}

var helloKeith = sayHello('Keith');
var goodbyeKeith = sayGoodbye('Keith');

console.log(helloKeith);
console.log(goodbyeKeith);
