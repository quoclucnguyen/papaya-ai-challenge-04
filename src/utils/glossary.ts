import { CATEGORIES } from '../data/glossary';
import type { CategoryGroup, GlossaryTerm } from '../types/glossary';

export const normalize = (value: string) => value.toLowerCase().trim();

export const sortTerms = (terms: GlossaryTerm[]) =>
  [...terms].sort((a, b) => a.name.localeCompare(b.name));

export const filterTerms = (terms: GlossaryTerm[], query: string) => {
  const normalizedQuery = normalize(query);

  if (!normalizedQuery) return sortTerms(terms);

  return sortTerms(
    terms.filter((term) => {
      const haystack = normalize(`${term.name} ${term.category} ${term.definition}`);
      return haystack.includes(normalizedQuery);
    }),
  );
};

export const groupByCategory = (terms: GlossaryTerm[]): CategoryGroup[] =>
  CATEGORIES.map((category) => ({
    category,
    terms: terms.filter((term) => term.category === category),
  })).filter((group) => group.terms.length > 0);

export const getAvailableLetters = (terms: GlossaryTerm[]) =>
  new Set(terms.map((term) => term.name[0].toUpperCase()));

export const findTermByName = (terms: GlossaryTerm[], name: string) =>
  terms.find((term) => normalize(term.name) === normalize(name));

export const makeTermDomId = (id: string) => `term-${id}`;