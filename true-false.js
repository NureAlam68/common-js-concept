// check truthy 

const x = [];

if(!!x) {
    console.log('Value is truthy')
}




// check falsy

const y = null;

if(!y) {
    console.log('Value is falsy')
}


// or


let z = '';

if(z) {
    console.log('Value is truthy');
}
else {
    console.log('Value is false');
}