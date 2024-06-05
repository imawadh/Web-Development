const name = ["Awadh", "Ryaan", "Dev"];
let [name1, name2, name3] = name;
console.log(name1, name2, name3);
// console.log(name)

const std = [
  ["Awadh", "Kishor"],
  ["John", "Deo"],
];
let [st1, st2] = std;
console.log(st1, st2);

const names = ["Awadh", "Kishor", "Singh"];
let [first, , last] = names;
console.log(first, last);

let vals = [1, 2, 3, 4, 5];
let num1=0;
let num2=0;
let num3=0;
let num5=0;
let nums_val = [num1, num2, num3, num5];
for (let i = 0; i < nums_val.length; i++) {
  console.log(nums_val[i], vals[i]);
  nums_val[i] = vals[i];
}
console.log(num1, num2, num3, num5);

let obj = {
  width: 20,
  height: 10,
  area: 200,
};
let {width,height,area}=obj
console.log(width,height,area)
