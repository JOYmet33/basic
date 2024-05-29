import { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([
    {
      id: Date.now(),
      todo: "",
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // falsy한 value는 저장하지 않기 : if, trim()
    if (!value) return;

    // truth한 value는 저장하기 : 2단계
    // 1. 새로운 객체 만들기 : const newTodo
    const newTodo = (value) => {
      return {
        id: Date.now(),
        todo: value,
      };
    };
    // 2. 기존 배열에 추가하기 : setTodos(), ...(스프레드 오퍼레이터)
    setTodos([newTodo, ...todos]);
    setValue("");
    console.log(todos);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          placeholder="Todo를 추가하세요"
        />
        <button type="submit">추가</button>
      </form>
      <ul>
        <li>
          <span>베이직반 숙제하기</span>
          <button>완료</button>
          <button>삭제</button>
        </li>
      </ul>
    </div>
  );
}

export default App;
