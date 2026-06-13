import type { GlossaryTerm } from '../types/glossary';
import { highlightMatch } from '../utils/highlight';
import { makeTermDomId } from '../utils/glossary';

interface TermCardProps {
  term: GlossaryTerm;
  query: string;
  selected: boolean;
  onSelect: (term: GlossaryTerm) => void;
}

export function TermCard({ term, query, selected, onSelect }: TermCardProps) {
  return (
    <article id={makeTermDomId(term.id)} className={`term-card ${selected ? 'selected' : ''}`}>
      <button type="button" onClick={() => onSelect(term)} aria-pressed={selected}>
        <span className="term-name">{highlightMatch(term.name, query)}</span>
        <span className="term-category">{term.category}</span>
        <span className="term-snippet">{highlightMatch(term.definition, query)}</span>
      </button>
    </article>
  );
}