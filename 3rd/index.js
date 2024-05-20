const users = [
  { name: "철수", age: 19, gender: "남" },
  { name: "짱구", age: 20, gender: "남" },
  { name: "유리", age: 21, gender: "여" },
];

const userList = document.querySelector(".userList");

users.forEach((user) => {
  let template = `<div class="card">
  <h1 class="name">이름: ${user.name}</h1>
  <h3 class="age">나이: ${user.age}</h3>
  <h3 class="gender">성별: ${user.gender}</h3> 
  </div>`;
  userList.insertAdjacentHTML("beforeend", template);
});
