function addF(n1: number, n2: number) {
    return n1 + n2;
}

function printResultF(num: number) {
    console.log('Result: ' + num);
}

function addAndHandle(n1: number, n2: number, cb: (n: number) => void) {
    const result = n1 + n2;
    cb(result);
}

printResultF(addF(5, 12));

let combineValuesF: (a: number, b: number) => number;

combineValuesF = addF;
// combineValues = printResult;

console.log(combineValuesF(8, 8));

addAndHandle(10, 20, (r) => {
    console.log(r);
});
