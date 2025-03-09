//task 1
const greeting = (arg = "incognito") => {
  console.log("hello " + arg);
};
greeting();
greeting("Peter");
//task2
const greeting2 = () => {
  const arr = ["Hello world!", "!Hola mundo!", "Hallo wereld!", "Пpивeт мир!"];
  return arr.forEach((item) => {
    console.log(item);
  });
};
greeting2();
//task7
let arr = ["a", 1, 2, 3, "x"];
const summ = (array) => {
  return array.reduce((a, b) => {
    return typeof b === "number" ? a + b : a;
  }, 0);
};
console.log(summ(arr));
//task8
let arr1 = ["abc", "abcdef1", "dahdhadha", "dadaxa", "xxaxd"];
const arrFilter = (array) => {
  return array.filter((item) => item.length > 5);
};
console.log(arrFilter(arr1));
