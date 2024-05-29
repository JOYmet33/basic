import { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([
    {
      id: Date.now(),
      text: "",
      isDone: false,
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // falsy한 value는 저장하지 않기 : if, trim()
    if (!value) return;

    // truth한 value는 저장하기 : 2단계
    // 1. 새로운 객체 만들기 : const newTodo
    const newTodo = {
      id: Date.now(),
      text: value,
      isDone: false,
    };

    // 2. 기존 배열에 추가하기 : setTodos(), ...(스프레드 오퍼레이터)
    setTodos([newTodo, ...todos]);
    setValue("");
  };

  return (
    <div>
      <h1>Todo List</h1>
      {/* <form> 기능
      1. <form>태그 onSubmit 바로 입력
      2. <button>태그 type="submit" */}
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
        {/* <li>태그를 map함수로 찍어내기*/}
        {todos.map((todo) => {
          return (
            <li
              key={todo.id}
              style={{
                textDecoration: todo.isDone ? "line-through" : "none",
              }}
            >
              <span>{`${todo.text}`}</span>
              <button>{todo.isDone ? "취소" : "완료"}</button>
              <button>삭제</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
