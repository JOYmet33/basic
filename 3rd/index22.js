// 문제 7
const user2 = {
  이름: "병수",
  나이: 20,
  주소: "시골",
};
const { 이름, 나이, 주소 } = user2;
console.log(이름); //출력: 병수
console.log(나이); //출력: 20
console.log(주소); //출력: 시골
console.log(user2); //출력: { 이름: "병수", 나이: 20, 주소: "시골" }

// 문제 8
const user = {
  이름: "병수",
  나이: 20,
  주소: "시골",
};
// 8-1) 로컬스토리지에 저장
localStorage.setItem("user", JSON.stringify(user));
// 8-2) 콘솔 출력
// console.log(user); // output: {이름: '병수', 나이: 20, 주소: '시골'}
// 8-3) 로컬스토리지 데이터 변경 후 저장
/* 로직
 * 1. 로컬스토리지 데이터 가져오기 = getItem
 * 2. 로컬스토리지 데이터 수정하기 = 나이+10
 * 3. 로컬스토리지 수정한 데이터 저장하기 = setItem
 */
localStorage.getItem("user");
let newUser = { ...user, 나이: user.나이 + 10 };
localStorage.setItem("user", JSON.stringify(newUser));
// 8-4) 로컬스토리지 데이터 삭제 후 조회 = removeItem, getItem
localStorage.removeItem("user");
localStorage.getItem("user");
