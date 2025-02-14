import { cn } from '../lib/utils';

interface ShapeDisplayProps {
  shape: string;
}

export const ShapeDisplay = ({ shape }: ShapeDisplayProps) => {
  return (
    <div className="w-48 h-48 relative flex items-center justify-center">
      <div
        className={cn(
          'transition-all duration-500 ease-in-out transform',
          {
            'w-36 h-36 rounded-full bg-gradient-to-br from-purple-400 to-purple-600':
              shape === 'circle',
            'w-36 h-36 bg-gradient-to-br from-blue-400 to-blue-600':
              shape === 'square',
            'w-0 h-0 border-l-[60px] border-r-[60px] border-b-[104px] border-l-transparent border-r-transparent border-b-green-500':
              shape === 'triangle',
            'w-36 h-24 bg-gradient-to-br from-yellow-400 to-yellow-600':
              shape === 'rectangle',
            'w-36 h-36 rotate-45 bg-gradient-to-br from-pink-400 to-pink-600':
              shape === 'diamond',
          }
        )}
      />
    </div>
  );
};