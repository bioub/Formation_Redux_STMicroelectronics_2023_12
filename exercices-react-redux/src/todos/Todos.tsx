import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { Todo } from './types';
import { useDispatch, useSelector } from 'react-redux';
import {
  itemsSelector,
  loadingSelector,
  newTodoSelector,
} from '../store/selectors';
import { addTodo, deleteTodo, fetchTodos, updateNewTodo } from '../store/slices/todos';
import { useEffect } from 'react';
import { AppDispatch } from '../store';

export default function Todos() {
  const newTodo = useSelector(newTodoSelector);
  const items = useSelector(itemsSelector);
  const loading = useSelector(loadingSelector);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchTodos())
  }, []);

  function setNewTodo(value: string) {
    dispatch(updateNewTodo(value));
  }

  // const [newTodo, setNewTodo] = useState('XYZ');
  // const [items, setItems] = useState<Todo[]>([
  //   { id: 1, title: 'ABC', completed: true },
  //   { id: 2, title: 'DEF', completed: false },
  //   { id: 3, title: 'HIJ', completed: true },
  // ]);

  function handleNewTodo() {
    dispatch(addTodo(newTodo));
  }

  function handleDeleteTodo(todo: Todo) {
    dispatch(deleteTodo(todo));
    // setItems(items.filter((t) => t.id !== todo.id));
  }

  return (
    <div className="Todos">
      <TodoForm
        newTodoInput={newTodo}
        onNewTodoChange={setNewTodo}
        onNewTodoAdd={handleNewTodo}
      />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <TodoList items={items} onDeleteItem={handleDeleteTodo} />
      )}
    </div>
  );
}
