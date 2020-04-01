"use strict";

var q = prompt('Введите строку', '');

function option(str) {
    let v = "аоиеёэыуюя";
    let count = 0;
    [...str].forEach(char => {
        if (v.includes(char))
            ++count;
    });
    return count;
}

function option1(str) {
    let v = "аоиеёэыуюя";
    let count = [...str].filter(element => v.includes(element)).length;
    return count;
}

function option2(str) {
    let v = "аоиеёэыуюя";
    let count = [...str].reduce((a, b) => v.includes(b) ? a + 1 : a, 0);
    return count;
}

console.log(option(q));
console.log(option1(q));
console.log(option2(q));
