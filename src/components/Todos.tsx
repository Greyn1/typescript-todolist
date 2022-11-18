import { ReactNode } from 'react';
import Todo from '../models/Todo';
import TodoItem from './TodoItem';
import classes from './Todos.module.css';

// add children only if u need to use children
type AppProps = {
    children ?: ReactNode;
    items : Todo[];
  }

const Todos = (props : AppProps) => {
    const {items} = props;
    return (
        <ul className={classes.todos}>
            {items.map((item) => <TodoItem todo={item} />)}
        </ul>
    );
}

export default Todos;