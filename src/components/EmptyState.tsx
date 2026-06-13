interface EmptyStateProps {
  query: string;
  onClear: () => void;
}

export function EmptyState({ query, onClear }: EmptyStateProps) {
  return (
    <div className="empty-state" role="status">
      <h2>No glossary terms found</h2>
      <p>No name or definition currently matches “{query}”. Try a broader term such as claim, limit, risk, or policy.</p>
      <button type="button" onClick={onClear}>Clear search</button>
    </div>
  );
}