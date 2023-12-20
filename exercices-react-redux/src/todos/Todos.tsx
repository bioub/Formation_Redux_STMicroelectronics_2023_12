import { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { Todo } from './types';
import { useDispatch, useSelector } from 'react-redux';
import { itemsSelector, newTodoSelector } from '../store/selectors';
import { addTodo, deleteTodo, updateNewTodo } from '../store/slices';

export default function Todos() {
  const newTodo = useSelector(newTodoSelector);
  const items = useSelector(itemsSelector);
  const dispatch = useDispatch();

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
      <TodoForm newTodoInput={newTodo} onNewTodoChange={setNewTodo} onNewTodoAdd={handleNewTodo} />
      <TodoList items={items} onDeleteItem={handleDeleteTodo}  />
    </div>
  );
}
