import { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { Todo } from './types';

export default function Todos() {
  const [newTodo, setNewTodo] = useState('XYZ');
  const [items, setItems] = useState<Todo[]>([
    { id: 1, title: 'ABC', completed: true },
    { id: 2, title: 'DEF', completed: false },
    { id: 3, title: 'HIJ', completed: true },
  ]);

  function handleNewTodo() {
    setItems([...items, { id: Math.random(), title: newTodo, completed: false }]);
  }

  function handleDeleteTodo(todo: Todo) {
    setItems(items.filter((t) => t.id !== todo.id));
  }

  return (
    <div className="Todos">
      <TodoForm newTodoInput={newTodo} onNewTodoChange={setNewTodo} onNewTodoAdd={handleNewTodo} />
      <TodoList items={items} onDeleteItem={handleDeleteTodo}  />
    </div>
  );
}
