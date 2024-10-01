// array like object
function sum(a, b, c){
    const args = [...arguments]; // argument golo array banano
    console.log(args);

    // console.log(args);
    const result = a + b + c;
    return result;
}
// console.log(arguments);
const total = sum(45, 89, 12, 45, 98, 56);
// console.log(total);
console.log(sum.length);  // function er parameter jana