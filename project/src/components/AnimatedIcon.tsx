import React from 'react';
import { Code, Sparkles } from 'lucide-react';

interface AnimatedIconProps {
  className?: string;
}

const AnimatedIcon: React.FC<AnimatedIconProps> = ({ className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-xl shadow-lg flex items-center justify-center animate-float">
        <Code className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
      </div>
      <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-teal-500 animate-ping" />
    </div>
  );
};

export default AnimatedIcon;