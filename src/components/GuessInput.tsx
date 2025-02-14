import { KeyboardEvent } from 'react';

interface GuessInputProps {
  onGuess: (guess: string) => void;
  disabled?: boolean;
}

export const GuessInput = ({ onGuess, disabled }: GuessInputProps) => {
  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !disabled) {
      onGuess((e.target as HTMLInputElement).value);
      (e.target as HTMLInputElement).value = '';
    }
  };

  return (
    <div className="flex gap-2 max-w-xs mx-auto">
      <input
        type="text"
        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        placeholder="Type your guess..."
        onKeyPress={handleKeyPress}
        disabled={disabled}
      />
      <button
        onClick={(e) => {
          const input = (e.target as HTMLElement)
            .previousElementSibling as HTMLInputElement;
          onGuess(input.value);
          input.value = '';
        }}
        disabled={disabled}
        className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-50"
      >
        Guess
      </button>
    </div>
  );
};