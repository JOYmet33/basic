// 문제2) DOM 조작과 이벤트
const eventBtn = document.querySelector(".btn");
eventBtn.addEventListener("click", function () {
  document.querySelector(".title").textContent = "제목아니다";
});

// 문제3) 함수
function sum(num1, num2) {
  let result = num1 + num2;
  console.log(result);
}
sum(1, 2);

// 문제4) 조건문
const isEvenOrOdd = (num) =>
  num % 2 === 0 ? console.log("짝수입니다") : console.log("홀수입니다");
// const isEvenOrOdd = function (num) {
//   if (num % 2 === 0) {
//     console.log("짝수입니다");
//   }
//   console.log("홀수입니다");
// };

isEvenOrOdd(4);

// 문제5) 변수
const user = {
  이름: "병수",
  나이: 20,
};

console.log(user);
