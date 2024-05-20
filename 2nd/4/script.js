const tabBtns = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tap-content");

for (let i = 0; i < 3; i++) {
  tabBtns[i].addEventListener("mouseover", function () {
    tabContents[i].classList.add("show");
  });
}

tabBtns.addEventListener("mouseover", function () {
  tabContents.classList.add("show");
});

tabBtns.addEventListener("mouseout", function () {
  tabContents.classList.remove("show");
});
