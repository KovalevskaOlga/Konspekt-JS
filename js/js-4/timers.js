// const a = 5;
// console.log(a);
// const b = 100;
// console.log(b);

// setTimeout(() => {
//     console.log("test 1")
// }, 1000);

// for (let i = 1; i <= 10000; i++) {
//     console.log(i)
// }

// виконує код через певний інтервал часу
// let timer = 0;
// setInterval(() => {
//   timer += 1;
//   console.log(timer);
// }, 2000);

let a = Number(prompt("сколько сек: "));
console.log(a);

const getTimer = document.querySelector(".timer");
const stop = document.querySelector(".btn");

const interval = setInterval(() => {
  a -= 1;
  
  if (a >= 0) {5
    getTimer.innerHTML = a;
  } else {
    clearInterval(interval)
  }
}, 1000);

stop.addEventListener("click", () => {
    clearInterval(interval)
})
