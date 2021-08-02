//Задача 1

function math() {
    let one = 22,
        two = 2,
        three = 4;
        console.log( (one - two) / three);
}

math();

//Задача 2
    function box (a) {
        let summ1 = a*a*a;
        let summ2 = a*a
        console.log(summ1);
        console.log(summ2)

        return(summ2)
    }

box(2)

//Задача 3 

function min (a,b) {
    if (a < b ) {
        return a;
    }else {
        return b;
    }
}
min();

let minDigit = min (22, 30)
console.log(minDigit);

function max (a,b) {
    if (a < b ) {
        return b;
    }else {
        return a;
    }
}
max();

let maxDigit = max (30, 22)
console.log(maxDigit);

//Задача 4

function getFirstMass (length) {
    let mass = [];

    for(let i = 1; i <= length; i++) {
        mass.push(i);
    }

    console.log(mass);
}

getFirstMass(20);

//Задача 5

function isEven(full) {
    return (full % 2 == 0) ? true : false;
}

console.log(isEven(20));

//Задача 6

function newArray (array) {
    let arr = []
        for(let i = 0; i < array.length; i++) {
            if(isEven(array[i]) == true){
                arr.push(array[i]) 
            }
        }
        return arr
}

let massive = newArray ([434,432,2,3,4,52,312,13,1,]);
console.log(massive);

//Задача 7
    
//Задача 8

//Задача 9
function fib (n) {
    let a = 1;
    let b = 1;

    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}
console.log(fib(12))

//Задача 10

// Задача 11









