import { createContext, ReactNode, useState } from "react";
import Todo from "../models/Todo";

type todosContextObj = {
    items : Todo[];
    addTodo : (text : string) => void;
    removeTodo : (id : string) => void;
}

type todosContextProps = {
    children ?: ReactNode;
}

export const todosContext = createContext<todosContextObj>({
    items:[],
    addTodo : () => {},
    removeTodo : (id : string) => {}
});

const TodosContextProvider = (props : todosContextProps) => {
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

  const contextValue : todosContextObj = {
    items : todos,
    addTodo : addTodoHandler,
    removeTodo : removeTodoHandler
  }

    return <todosContext.Provider value={contextValue}>{props.children}</todosContext.Provider>
}

export default TodosContextProvider;