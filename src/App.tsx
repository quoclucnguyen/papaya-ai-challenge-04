import { useMemo, useState } from 'react';
import { AlphabetJump } from './components/AlphabetJump';
import { CategoryAccordion } from './components/CategoryAccordion';
import { EmptyState } from './components/EmptyState';
import { SearchBox } from './components/SearchBox';
import { TermDetail } from './components/TermDetail';
import { CATEGORIES, glossaryTerms } from './data/glossary';
import type { GlossaryCategory, GlossaryTerm } from './types/glossary';
import {
  filterTerms,
  findTermByName,
  getAvailableLetters,
  groupByCategory,
  makeTermDomId,
} from './utils/glossary';

const allCategoryNames = new Set<GlossaryCategory>(CATEGORIES);

export default function App() {
  const [query, setQuery] = useState('');
  const [selectedTermId, setSelectedTermId] = useState<string | undefined>(glossaryTerms[0]?.id);
  const [expandedCategories, setExpandedCategories] = useState<Set<GlossaryCategory>>(allCategoryNames);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const filteredTerms = useMemo(() => filterTerms(glossaryTerms, query), [query]);
  const categoryGroups = useMemo(() => groupByCategory(filteredTerms), [filteredTerms]);
  const availableLetters = useMemo(() => getAvailableLetters(filteredTerms), [filteredTerms]);

  const selectedTerm = glossaryTerms.find((term) => term.id === selectedTermId);

  const openTerm = (term: GlossaryTerm) => {
    setSelectedTermId(term.id);
    setExpandedCategories((current) => new Set(current).add(term.category));
  };

  const scrollToTerm = (term: GlossaryTerm) => {
    window.requestAnimationFrame(() => {
      document.getElementById(makeTermDomId(term.id))?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    });
  };

  const handleSelectTerm = (term: GlossaryTerm) => {
    openTerm(term);
    setIsDetailOpen(true);
    scrollToTerm(term);
  };

  const handleRelatedTermClick = (name: string) => {
    const relatedTerm = findTermByName(glossaryTerms, name);
    if (!relatedTerm) return;

    openTerm(relatedTerm);
    setIsDetailOpen(true);
    scrollToTerm(relatedTerm);
  };

  const handleToggleCategory = (category: GlossaryCategory) => {
    setExpandedCategories((current) => {
      const next = new Set(current);
      if (next.has(category)) next.delete(category);
      else next.add(category);
      return next;
    });
  };

  const handleJump = (letter: string) => {
    const targetTerm = filteredTerms.find((term) => term.name.toUpperCase().startsWith(letter));
    if (!targetTerm) return;

    openTerm(targetTerm);
    scrollToTerm(targetTerm);
  };

  const handleQueryChange = (nextQuery: string) => {
    setQuery(nextQuery);
    if (nextQuery.trim()) {
      setExpandedCategories(new Set(CATEGORIES));
    }
  };

  return (
    <div className="app-shell">
      <header className="hero">
        <div>
          <p className="eyebrow">AI Challenge 04</p>
          <h1>Insurance Glossary Search</h1>
          <p className="lede">
            Search plain-English definitions for insurance, claims, coverage, life & health,
            reinsurance, and regulatory terminology. All data is bundled in the client app so it
            works offline after the first load.
          </p>
        </div>
        <div className="hero-card" aria-label="Glossary statistics">
          <strong>{glossaryTerms.length}</strong>
          <span>terms across {CATEGORIES.length} categories</span>
        </div>
      </header>

      <main className="workspace">
        <aside className="left-rail">
          <SearchBox
            query={query}
            resultCount={filteredTerms.length}
            totalCount={glossaryTerms.length}
            onQueryChange={handleQueryChange}
          />
          <AlphabetJump availableLetters={availableLetters} onJump={handleJump} />
        </aside>

        <section className="terms-area" aria-label="Glossary terms grouped by category">
          {categoryGroups.length === 0 ? (
            <EmptyState query={query} onClear={() => setQuery('')} />
          ) : (
            categoryGroups.map((group) => (
              <CategoryAccordion
                key={group.category}
                group={group}
                query={query}
                selectedTermId={selectedTermId}
                expanded={expandedCategories.has(group.category)}
                onToggle={handleToggleCategory}
                onSelectTerm={handleSelectTerm}
              />
            ))
          )}
        </section>

        <TermDetail
          term={selectedTerm}
          open={isDetailOpen}
          onClose={() => setIsDetailOpen(false)}
          onRelatedTermClick={handleRelatedTermClick}
        />
      </main>
    </div>
  );
}