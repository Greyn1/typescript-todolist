import Todo from "../models/Todo";
import classes from './TodoItem.module.css';

 type TodoItemProps = {
    todo : Todo;
    onRemoveTodo : (id:string) => void;
} 


const TodoItem = ({todo, onRemoveTodo} : TodoItemProps) => {

    const handleClick = () => {
        onRemoveTodo(todo.id);
    }

    return <li className={classes.item} onClick={handleClick}>{todo.text}</li>
}

export default TodoItem;