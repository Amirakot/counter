//button
let btn_increase = document.querySelector(".increase");
let btn_reset = document.querySelector(".btn-reset");
let btn_decrease = document.querySelector(".decrease");
//number
let number=document.querySelector('h1');
btn_increase.addEventListener('click',increase);
btn_decrease.addEventListener('click',decrease);
btn_reset.addEventListener("click", reset);
 let num = 0;
//increase function
function increase(){
 num =num+1
 number.textContent=num
console.log(num)
number.style.color='green'
}
//decreae
function decrease() {
  num = num - 1;
  number.textContent = num;
  console.log(num);
  number.style.color = "red";
}
//reset
function reset(){
    number.textContent=0;
    number.style.color='white';
    num=0;
}
