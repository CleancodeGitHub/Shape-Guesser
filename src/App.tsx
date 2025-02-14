import React, { useState, useEffect } from 'react';
import { Brain } from 'lucide-react';
import { ShapeDisplay } from './components/ShapeDisplay';
import { GuessInput } from './components/GuessInput';
import { ScoreDisplay } from './components/ScoreDisplay';

const shapes = [
  { name: 'circle', hint: 'This shape has no corners and is perfectly round.' },
  { name: 'square', hint: 'This shape has four equal sides and four right angles.' },
  { name: 'triangle', hint: 'This shape has three sides and three angles.' },
  {
    name: 'rectangle',
    hint: 'This shape has two pairs of equal sides and four right angles.',
  },
  { name: 'diamond', hint: 'This shape looks like a square turned 45 degrees.' },
];

function App() {
  const [currentShape, setCurrentShape] = useState('');
  const [hint, setHint] = useState('');
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const savedHighScore = localStorage.getItem('highScore');
    if (savedHighScore) setHighScore(Number(savedHighScore));
    generateNewShape();
  }, []);

  const generateNewShape = () => {
    const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
    setCurrentShape(randomShape.name);
    setHint(randomShape.hint);
  };

  const handleGuess = (guess: string) => {
    const normalizedGuess = guess.trim().toLowerCase();

    if (normalizedGuess === currentShape) {
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 2000);

      setScore((prev) => prev + 1);
      setStreak((prev) => prev + 1);

      if (score + 1 > highScore) {
        setHighScore(score + 1);
        localStorage.setItem('highScore', String(score + 1));
      }

      generateNewShape();
    } else {
      setStreak(0);
      alert(`Incorrect! The shape was a ${currentShape}. Try again!`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
        <div className="flex items-center justify-center gap-2 mb-8">
          <Brain className="w-8 h-8 text-purple-600" />
          <h1 className="text-3xl font-bold text-gray-800">Shape Guesser</h1>
        </div>

        <ShapeDisplay shape={currentShape} />

        <div className="mt-8">
          <p className="text-gray-600 text-center mb-4">
            <span className="font-semibold">Hint:</span> {hint}
          </p>
          <GuessInput onGuess={handleGuess} />
        </div>

        <ScoreDisplay score={score} streak={streak} highScore={highScore} />

        {showSuccess && (
          <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg">
            Correct! 🎉
          </div>
        )}
      </div>
    </div>
  );
}

export default App;