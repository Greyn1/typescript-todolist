import { FormEvent, useContext, useRef } from "react";
import { todosContext } from "../contexts/todos.context";
import classes from './NewTodo.module.css';

const NewTodo = () => {
    const {addTodo} = useContext(todosContext);
    const todoTextInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event : FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const enteredText = todoTextInputRef.current!.value;
        if(enteredText.trim().length === 0){
            //throw error
            return;
        }
        addTodo(enteredText);
    }

    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <label htmlFor="text">Todo Text</label>
            <input type="text" id="text" ref={todoTextInputRef} />
            <button type="submit">Submit</button>
        </form>
    );
}

export default NewTodo;