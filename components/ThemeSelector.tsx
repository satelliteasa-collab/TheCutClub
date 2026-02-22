import React from 'react';
import { Theme } from '../types';
import { Palette } from 'lucide-react';

interface Props {
  currentTheme: Theme;
  setTheme: (t: Theme) => void;
}

export const ThemeSelector: React.FC<Props> = ({ currentTheme, setTheme }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {isOpen && (
        <div className="bg-white/90 backdrop-blur-md shadow-2xl rounded-xl p-2 flex flex-col gap-2 border border-gray-200 animate-in fade-in slide-in-from-bottom-4 duration-200">
          <button 
            onClick={() => setTheme(Theme.MODERN)}
            className={`px-4 py-2 rounded-lg text-sm font-bold tracking-wide transition-all text-left ${currentTheme === Theme.MODERN ? 'bg-black text-white' : 'hover:bg-gray-100 text-gray-800'}`}
          >
            Style 01: MODERN
          </button>
          <button 
            onClick={() => setTheme(Theme.ORGANIC)}
            className={`px-4 py-2 rounded-lg text-sm font-serif transition-all text-left ${currentTheme === Theme.ORGANIC ? 'bg-[#4A5D4F] text-white' : 'hover:bg-gray-100 text-gray-800'}`}
          >
            Style 02: ORGANIC
          </button>
          <button 
            onClick={() => setTheme(Theme.ROYAL)}
            className={`px-4 py-2 rounded-lg text-sm font-serif tracking-widest transition-all text-left ${currentTheme === Theme.ROYAL ? 'bg-white text-black border border-gray-300 shadow-sm' : 'hover:bg-gray-100 text-gray-800'}`}
          >
            Style 03: STYLISH
          </button>
        </div>
      )}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="h-14 w-14 bg-black text-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform active:scale-95"
      >
        <Palette size={24} />
      </button>
    </div>
  );
};