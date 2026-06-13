import type { CategoryGroup, GlossaryCategory, GlossaryTerm } from '../types/glossary';
import { TermCard } from './TermCard';

interface CategoryAccordionProps {
  group: CategoryGroup;
  query: string;
  selectedTermId?: string;
  expanded: boolean;
  onToggle: (category: GlossaryCategory) => void;
  onSelectTerm: (term: GlossaryTerm) => void;
}

export function CategoryAccordion({
  group,
  query,
  selectedTermId,
  expanded,
  onToggle,
  onSelectTerm,
}: CategoryAccordionProps) {
  const panelId = `category-${group.category.replace(/\W+/g, '-').toLowerCase()}`;

  return (
    <section className="category-section">
      <button
        type="button"
        className="category-header"
        aria-expanded={expanded}
        aria-controls={panelId}
        onClick={() => onToggle(group.category)}
      >
        <span>{group.category}</span>
        <span className="category-meta">{group.terms.length} terms</span>
      </button>
      <div id={panelId} className={`category-panel ${expanded ? 'is-open' : 'is-closed'}`}>
        <div className="category-panel-inner">
          {group.terms.map((term) => (
            <TermCard
              key={term.id}
              term={term}
              query={query}
              selected={selectedTermId === term.id}
              onSelect={onSelectTerm}
            />
          ))}
        </div>
      </div>
    </section>
  );
}