import { FormEvent } from 'react';
import './TodoForm.css';

type Props = {
  newTodoInput: string;
  onNewTodoChange(value: string): void;
  onNewTodoAdd(value: string): void;
};

export default function TodoForm({
  newTodoInput,
  onNewTodoChange,
  onNewTodoAdd,
}: Props) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onNewTodoAdd(newTodoInput);
  }
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        value={newTodoInput}
        onChange={(event) => onNewTodoChange(event.target.value)}
      />
      <button>+</button>
    </form>
  );
}
