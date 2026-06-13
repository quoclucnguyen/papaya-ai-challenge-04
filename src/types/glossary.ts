export type GlossaryCategory =
  | 'General Insurance'
  | 'Claims'
  | 'Coverage'
  | 'Life & Health'
  | 'Reinsurance'
  | 'Regulatory';

export interface GlossaryTerm {
  id: string;
  name: string;
  category: GlossaryCategory;
  definition: string;
  relatedTerms: string[];
}

export interface CategoryGroup {
  category: GlossaryCategory;
  terms: GlossaryTerm[];
}