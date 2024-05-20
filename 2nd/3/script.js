const upBtn = document.querySelector("button");

window.addEventListener("scroll", function () {
  // 만약 scrollY가 100보다 크면
  // 업버튼이 화면에 보이게 한다
  if (scrollY > 100) {
    upBtn.style.display = "block";
  } else {
    upBtn.style.display = "none";
  }
});

upBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
