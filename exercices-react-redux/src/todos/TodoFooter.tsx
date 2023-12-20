type Props = {
  filter: string;
  onFilterChange(filterValue: string): void;
  onUndo(): void;
  onRedo(): void
};

const filterValues = ['All', 'Active', 'Completed'];

export function TodosFooter({ filter, onFilterChange, onUndo, onRedo }: Props) {
  return (
    <div>
      {filterValues.map((filterValue) => (
        <button key={filterValue} onClick={() => onFilterChange(filterValue)} disabled={filter === filterValue}>
          {filterValue}
        </button>
      ))}

      <button onClick={() => onUndo()}>Undo</button>
      <button onClick={() => onRedo()}>Redo</button>
    </div>
  );
}
