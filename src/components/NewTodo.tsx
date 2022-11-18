import { FormEvent, useRef } from "react";
import classes from './NewTodo.module.css';

type NewTodoProps = {
    onAddTodo : (text:string) => void;
}

const NewTodo = ({onAddTodo} : NewTodoProps) => {
    const todoTextInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event : FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const enteredText = todoTextInputRef.current!.value;
        if(enteredText.trim().length === 0){
            //throw error
            return;
        }
        onAddTodo(enteredText);
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