import TodoItem from './TodoItem';
import { useContext } from 'react';
import classes from './Todos.module.css';
import { todosContext } from '../contexts/todos.context';

const Todos = () => {
    const {items, removeTodo} = useContext(todosContext);
    return (
        <ul className={classes.todos}>
            {items.map((item) => <TodoItem todo={item} onRemoveTodo={removeTodo}/>)}
        </ul>
    );
}

export default Todos;