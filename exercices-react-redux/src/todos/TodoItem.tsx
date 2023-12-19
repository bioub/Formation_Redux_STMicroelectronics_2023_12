import './TodoItem.css';
import { Todo } from './types';

type Props = {
  item: Todo,
  onDeleteItem(todo: Todo): void;
}

export default function TodoItem({ item, onDeleteItem }: Props) {
  return (
    <div className="TodoItem">
      <span>{item.title}</span>
      <button onClick={() => onDeleteItem(item)}>-</button>
    </div>
  );
}
