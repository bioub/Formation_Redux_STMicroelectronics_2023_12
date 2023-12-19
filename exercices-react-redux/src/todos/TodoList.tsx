import { Component } from 'react';

import TodoItem from './TodoItem';
import { Todo } from './types';

type Props = {
  items: Todo[],
  onDeleteItem(todo: Todo): void;
}

export default class TodoList extends Component<Props> {
  render() {
    const { items, onDeleteItem } = this.props;
    return (
      <div>
        <div className="TodoList">
          {items.map((it) => (
            <TodoItem key={it.id} item={it} onDeleteItem={onDeleteItem} />
          ))}
        </div>
      </div>
    );
  }
}
