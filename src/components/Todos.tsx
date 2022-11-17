import { ReactNode } from 'react';
import Todo from '../models/Todo';

// add children only if u need to use children
type AppProps = {
    children ?: ReactNode;
    items : Todo[];
  }

const Todos = (props : AppProps) => {
    const {items} = props;
    return (
        <ul>
            {items.map((item) => <li key={item.id}>{item.text}</li>)}
        </ul>
    );
}

export default Todos;