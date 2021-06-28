"use strict";
function addF(n1, n2) {
    return n1 + n2;
}
function printResultF(num) {
    console.log('Result: ' + num);
}
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
printResultF(addF(5, 12));
var combineValuesF;
combineValuesF = addF;
// combineValues = printResult;
console.log(combineValuesF(8, 8));
addAndHandle(10, 20, function (r) {
    console.log(r);
});
