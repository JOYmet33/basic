const btn = document.querySelector("button");
const input = document.querySelector("input");
const span = document.querySelector("span");

function 배달팁계산() {
  // 조건: input 값이 10000원 미만이면 ==> 배달팁 3000원 보이기
  // 조건2: input 값이 10000원 이상, 30000원 미만이면 ==> 배달팁 2000원 보이기
  // 조건3: input 값이 30000원 이상, 50000원 미만이면 ==> 배달팁 1000원 보이기
  // 조건4: input 값이 50000원 이상이면 ==> 배달팁 1000원 보이기
  const value = input.value;
  if (value < 10000) {
    return 3000;
  } else if (value < 30000) {
    return 2000;
  } else if (value < 50000) {
    return 1000;
  } else {
    return 0;
  }
}

btn.addEventListener("click", function () {
  span.innerHTML = 배달팁계산();
});
