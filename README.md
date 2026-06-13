# AI Challenge 04 — Insurance Glossary Search App

React + Vite implementation of a searchable insurance terminology glossary.

**Live demo:** https://papaya-ai-challenge-04.vercel.app

## Run local

```bash
npm install
npm run dev
```

Open `http://localhost:5104`.

Build production static assets:

```bash
npm run build
npm run preview
```

## What is included

- 48 glossary terms across all 6 required categories.
- Expandable category sections.
- Realtime full-text search across term name, category, and definition.
- Match highlighting with `<mark>`.
- Term detail panel with full definition and related terms.
- Related term navigation that opens the target category and scrolls to the term.
- A–Z quick jump based on the currently visible filtered terms.
- Responsive layout with clean, readable typography.
- Offline-friendly architecture: all glossary data is bundled client-side; no API calls or external runtime data.

## Structure

```text
challenge-04/
├── AI_Challenge_04.md
├── CHECKLIST.md
├── README.md
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── src/
    ├── App.tsx                  # app state, filtering, navigation orchestration
    ├── main.tsx                 # React entrypoint
    ├── styles.css               # layout, typography, responsive design
    ├── components/
    │   ├── AlphabetJump.tsx
    │   ├── CategoryAccordion.tsx
    │   ├── EmptyState.tsx
    │   ├── SearchBox.tsx
    │   ├── TermCard.tsx
    │   └── TermDetail.tsx
    ├── data/
    │   └── glossary.ts          # bundled glossary dataset
    ├── types/
    │   └── glossary.ts
    └── utils/
        ├── glossary.ts          # filter/group/sort helpers
        └── highlight.tsx        # search match highlighter
```

## Key decisions

- **React + Vite + TypeScript**: enough structure for stateful UI without the overhead of a full-stack framework.
- **Client-side static data**: meets the offline requirement and keeps search instant for this dataset size.
- **Pure utility functions**: filtering, grouping, sorting, and lookup logic are isolated from rendering components.
- **Accessible interactions**: category headers expose `aria-expanded`, search result count uses `aria-live`, and focus-visible styles are defined for keyboard users.
- **Professional visual system**: restrained blue/ink palette, sticky search/detail panels on desktop, single-column responsive layout on mobile.

## Timeline estimate

| Step | Time |
|------|------:|
| Requirement analysis + React/Vite plan | ~20 min |
| Project setup + component architecture | ~25 min |
| Glossary research/data writing | ~45 min |
| Search, highlight, accordion, related-term navigation | ~60 min |
| Responsive styling + accessibility pass | ~35 min |
| Verification + documentation | ~25 min |
| **Total** | **~3 hours** |

