let x = 12.1234567;

let xy = String(x)

let z = xy.split('.')

let a = z[0]+'.'+(z[1]+1)

console.log(a);
console.log(typeof(a));

let cus = 40.0

let cus1 = parseFloat(cus)

console.log(cus1);