// 문제 1)
const users = [
  { name: "철수", age: 19, gender: "남" },
  { name: "짱구", age: 20, gender: "남" },
  { name: "유리", age: 21, gender: "여" },
];

// 문제 2)
const userList = document.querySelector(".userList");

users.forEach((user) => {
  let template = `<div class="card">
  <h1 class="name">이름: ${user.name}</h1>
  <h3 class="age">나이: ${user.age}</h3>
  <h3 class="gender">성별: ${user.gender}</h3> 
  </div>`;
  userList.insertAdjacentHTML("beforeend", template);
});

// 문제 3)
const findGirl = users.find((user) => user.gender === "여");
console.log(findGirl);

// 문제 4)
const findBoys = users.filter((user) => user.gender === "남");
console.log(findBoys);

// 문제 5)
const plusAges = users.map((user) => {
  return {
    name: user.name,
    age: user.age + 10,
    gender: user.gender,
  };
});
console.log(plusAges);

// 문제 5) 번외 -- map 연습하기
// 모든 데이터의 이름에 "님" 붙이기
const plusName = users.map((user) => {
  return {
    name: user.name + "님", //글자를 붙이려면 더하기 기호를 써야 붙는구나!
    age: user.age,
    gender: user.gender,
  };
});
console.log(plusName);

// 문제 6)
let newUsers = [...users];
newUsers.sort((a, b) => {
  return b.age - a.age;
});
console.log(users);
console.log(newUsers);

// 문제 7)
