import ReactDOM from 'react-dom/client';
import TodosContextProvider from './contexts/todos.context';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
    <TodosContextProvider>
        <App />
    </TodosContextProvider>
   
);

