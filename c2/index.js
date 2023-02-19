function mnozenje(a, b) {
  let c = a * b;
  console.log(c);
}

const Mnozenje = (a, b) => console.log(a * b); // FAT-ARROW FUNCTION

mnozenje(10, 8);

// this


// Zadaca
// funkcija 1 pravi konverzija od C vo F
// funkcija 1 pravi konverzija od F vo C

// function c2f() {
//   let b = 1.8;
//   let c = 32;
//   let f = a * b + c;
//   console.log(f);
// }

// c2f(a = 10)

// function f2c() {
//   let b = 5;
//   let c = 32;
//   let h = 9;
//   // let f = a * b - c / h;
//   let f = a - c * b / h;
//   console.log(f);
// }

// f2c(a = 50)

const c2f = (c) => {
  return c * 1.8 + 32;
};

const f2c = (f) => {
  return (f * 32) * 5 / 9;
};

let res1 = c2f(12);
console.log(res1);
let res2 = f2c(100);
console.log(res2);

let res3 = console.log(res2);
console.log(res3); // undefined



const fun = (parm, c) => {
  let r = parm(c) + 100;
  return r;
};

let res = fun(f2c, 12);
console.log('FUN:', res);

// fun(c2f, 12);

// const handler = (e) => {
//   console.log(e);
// }

// el.addEventListener('click', handler);

