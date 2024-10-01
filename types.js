// primitive type reference dore rake na


let x = 5;
let y = x;

console.log(x, y);

y = 7;

console.log(x, y);



// non-primitive type reference dore dake


// let p = {job: 'Web developer'};
// let q = p;
// q = {job: 'Software engineer'};

// console.log(p, q);


let p = {job: 'Web developer'};
let q = p;
q.job = 'Software engineer';

console.log(p, q);
