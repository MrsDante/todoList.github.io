import './App.css';
import { useState } from "react";

function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (todo !== '') {
      setTodos([...todos, todo]);
      setTodo('');
    }
};

  const deleteTodo = (el) => {
    const newTodos = todos.filter((todo) => {
      return todo !== el;
    });
    setTodos(newTodos);
  }

  return (
    <div className="App">
        <h1> Грандиозный список дел! </h1>

        <div className="input-wrapper">
          <input 
            type="text" 
            name="todo" 
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            placeholder="Добавить новое (невыполнимое) дело!" />
          <button 
            onClick={addTodo} 
            className="add-button">Добавить
          </button>
        </div>
        
        {todos?.length > 0 ? (
        <ul className="todo-list">
          {todos.map((todo, index) => (
            <div className="todo">
              <li key={index}> {todo} </li>

              <button
                className="delete-button"
                onClick={() => {
                  deleteTodo(todo);
                }}
              >
                Удалить
              </button>
            </div>
          ))}
        </ul>
      ) : (
        <div className="empty">
          <p>Заданий пока что нет</p>
        </div>
      )}

    </div>
  );
}

export default App;
