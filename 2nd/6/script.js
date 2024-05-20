const adBox = document.querySelector(".ad-box");
const timer = document.querySelector(".timer");

let count = Number(timer.textContent);

setInterval(() => {
  console.log("setInterval 실행중??");
  if (count > 0) {
    count = count - 1;
    timer.textContent = count;
  } else {
    adBox.style.display = "none";
  }
}, 1000);
