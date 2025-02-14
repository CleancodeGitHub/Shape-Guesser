import { Trophy, Flame } from 'lucide-react';

interface ScoreDisplayProps {
  score: number;
  streak: number;
  highScore: number;
}

export const ScoreDisplay = ({ score, streak, highScore }: ScoreDisplayProps) => {
  return (
    <div className="flex gap-6 justify-center items-center mt-6">
      <div className="flex items-center gap-2">
        <span className="text-lg">Score: {score}</span>
      </div>
      <div className="flex items-center gap-2">
        <Flame className="w-5 h-5 text-orange-500" />
        <span className="text-lg">Streak: {streak}</span>
      </div>
      <div className="flex items-center gap-2">
        <Trophy className="w-5 h-5 text-yellow-500" />
        <span className="text-lg">Best: {highScore}</span>
      </div>
    </div>
  );
};