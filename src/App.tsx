import { useState } from 'react';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/Todo';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]); 

  const addTodoHandler = (text:string) => {
    const newTodo = new Todo(text);
    setTodos((prevTodo) => {
      return prevTodo.concat(newTodo);
      // or return [...prevTodo,newTodo]
    });
  }

  const removeTodoHandler = (todoId : string) => {
    setTodos((prevTodo) => {
      return prevTodo.filter(todo => todo.id !== todoId);
    });
  }

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler}/>
      <Todos items={todos} onRemoveTodo={removeTodoHandler}/>
    </div>
  );
}

export default App;
