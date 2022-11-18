import Todo from "../models/Todo";
import classes from './TodoItem.module.css';

 type TodoItemProps = {
    todo : Todo;
} 


const TodoItem = ({todo} : TodoItemProps) => {
    return <li className={classes.item}>{todo.text}</li>
}

export default TodoItem;