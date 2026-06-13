const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

interface AlphabetJumpProps {
  availableLetters: Set<string>;
  onJump: (letter: string) => void;
}

export function AlphabetJump({ availableLetters, onJump }: AlphabetJumpProps) {
  return (
    <nav className="alphabet-jump" aria-label="Alphabet quick jump">
      {LETTERS.map((letter) => {
        const enabled = availableLetters.has(letter);
        return (
          <button
            key={letter}
            type="button"
            disabled={!enabled}
            aria-disabled={!enabled}
            onClick={() => onJump(letter)}
          >
            {letter}
          </button>
        );
      })}
    </nav>
  );
}