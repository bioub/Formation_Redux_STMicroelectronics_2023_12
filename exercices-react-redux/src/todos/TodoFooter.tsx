type Props = {
  filter: string;
  onFilterChange(filterValue: string): void;
};

const filterValues = ['All', 'Active', 'Completed'];

export function TodosFooter({ filter, onFilterChange }: Props) {
  return (
    <div>
      {filterValues.map((filterValue) => (
        <button key={filterValue} onClick={() => onFilterChange(filterValue)} disabled={filter === filterValue}>
          {filterValue}
        </button>
      ))}
    </div>
  );
}
