import React from 'react';

export function GooglePlayIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3.609 1.814L13.793 12 3.61 22.186c-.368-.372-.61-.926-.61-1.583V3.397c0-.657.242-1.211.609-1.583zm11.246 11.248l2.671-2.671-11.834-6.84 9.163 9.511zm0 .001l-9.163 9.51 11.834-6.84-2.671-2.67zm1.061-1.063l3.327 1.924c.954.552.954 1.45 0 2.002l-3.327 1.924-2.14-2.14 2.14-2.71z" />
    </svg>
  );
}
