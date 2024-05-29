import { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([
    {
      id: Date.now(),
      text: "test todo",
      isDone: false,
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // falsy한 value는 저장하지 않기 : if, trim()
    if (!value.trim()) return;

    // truth한 value는 저장하기 : 2단계
    // 1. 새로운 객체 만들기 : const newTodo
    const newTodo = {
      id: Date.now(),
      text: value,
      isDone: false,
    };

    // 2. 기존 배열에 추가하기 : setTodos(), ...(spread operator)
    setTodos([newTodo, ...todos]);
    setValue("");
  };

  // Todo의 삭제 버튼 : filter
  // ==> 원리 설명: 삭제하고자 하는 todo만 setTodos에서 걸러내기
  // ==> 필수 요건: 고유한 id
  const handleDeleteTodo = (id) => {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );
  };

  // Todo의 수정 버튼 : map, 삼항연산자, ...(spread operator)
  // ==> 원리 설명: setTodos에 수정하고자 하는 내용을 수정하여 다시 저장하기
  // ==> 필수 요건: 고유한 id, map함수의 key
  const handleToggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id !== id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
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
              <button onClick={() => handleToggleTodo(todo.id)}>
                {todo.isDone ? "취소" : "완료"}
              </button>
              <button onClick={() => handleDeleteTodo(todo.id)}>삭제</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
