interface SearchBoxProps {
  query: string;
  resultCount: number;
  totalCount: number;
  onQueryChange: (query: string) => void;
}

export function SearchBox({ query, resultCount, totalCount, onQueryChange }: SearchBoxProps) {
  return (
    <section className="search-panel" aria-label="Search glossary">
      <label htmlFor="glossary-search">Search insurance terms</label>
      <div className="search-row">
        <span aria-hidden="true">⌕</span>
        <input
          id="glossary-search"
          type="search"
          value={query}
          placeholder="Try deductible, solvency, waiting period..."
          onChange={(event) => onQueryChange(event.target.value)}
          autoComplete="off"
        />
      </div>
      <p aria-live="polite">
        Showing <strong>{resultCount}</strong> of <strong>{totalCount}</strong> bundled glossary terms.
      </p>
    </section>
  );
}