import { useEffect, useState } from 'react';
import type { GlossaryTerm } from '../types/glossary';

const CLOSE_ANIMATION_MS = 220;

interface TermDetailProps {
  term?: GlossaryTerm;
  open: boolean;
  onClose: () => void;
  onRelatedTermClick: (name: string) => void;
}

export function TermDetail({ term, open, onClose, onRelatedTermClick }: TermDetailProps) {
  const [shouldRender, setShouldRender] = useState(open);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (open) {
      setShouldRender(true);
      setIsClosing(false);
      return;
    }

    if (shouldRender) {
      setIsClosing(true);
      const closeTimer = window.setTimeout(() => {
        setShouldRender(false);
        setIsClosing(false);
      }, CLOSE_ANIMATION_MS);

      return () => window.clearTimeout(closeTimer);
    }
  }, [open, shouldRender]);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open, onClose]);

  if (!shouldRender || !term) return null;

  return (
    <div className={`modal-backdrop ${isClosing ? 'is-closing' : 'is-opening'}`} role="presentation" onClick={onClose}>
      <aside
        className="detail-panel detail-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="term-detail-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button className="modal-close" type="button" aria-label="Close term detail" onClick={onClose}>
          ×
        </button>
        <p className="eyebrow">{term.category}</p>
        <h2 id="term-detail-title">{term.name}</h2>
        <p className="definition">{term.definition}</p>
        <div className="related-block">
          <h3>Related terms</h3>
          <div className="related-list">
            {term.relatedTerms.map((relatedTerm) => (
              <button key={relatedTerm} type="button" onClick={() => onRelatedTermClick(relatedTerm)}>
                {relatedTerm}
              </button>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}