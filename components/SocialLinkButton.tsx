
import React, { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { SocialLink } from '../types';

interface Props {
  link: SocialLink & { iconComponent: React.ReactNode };
}

const SocialLinkButton: React.FC<Props> = ({ link }) => {
  const [copied, setCopied] = useState(false);

  const handleClick = () => {
    if (link.type === 'copy') {
      navigator.clipboard.writeText(link.url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } else {
      window.open(link.url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <button
      onClick={handleClick}
      className="group relative flex items-center justify-between w-full max-w-md bg-zinc-900/40 border border-zinc-800/50 hover:border-sky-400/50 hover:bg-zinc-800/60 p-4 rounded-2xl transition-all duration-300 backdrop-blur-sm"
    >
      <div className="flex items-center space-x-4">
        <div className="p-2 bg-zinc-800 rounded-lg group-hover:bg-sky-400 group-hover:text-white transition-colors">
          {link.iconComponent}
        </div>
        <span className="font-medium text-zinc-200 group-hover:text-white transition-colors text-left">
          {link.name}
        </span>
      </div>
      
      <div className="text-zinc-500 group-hover:text-zinc-300">
        {link.type === 'copy' ? (
          copied ? <Check size={18} className="text-green-500" /> : <Copy size={18} />
        ) : (
          <div className="w-2 h-2 rounded-full bg-zinc-700 group-hover:bg-sky-400 transition-colors" />
        )}
      </div>

      {copied && (
        <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-green-500 text-white text-xs px-2 py-1 rounded animate-bounce">
          Zkopírováno!
        </span>
      )}
    </button>
  );
};

export default SocialLinkButton;
