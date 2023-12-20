import { FormEvent, useRef } from 'react';
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
  const inputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onNewTodoAdd(newTodoInput);
    inputRef.current?.focus();
  }

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        value={newTodoInput}
        onChange={(event) => onNewTodoChange(event.target.value)}
      />
      <button>+</button>
    </form>
  );
}
