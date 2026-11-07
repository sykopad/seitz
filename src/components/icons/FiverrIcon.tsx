import React from 'react';

export function FiverrIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="21" cy="6" r="2.5" />
      <path d="M16.5 6.5h-3V5a2 2 0 0 1 2-2h1V0h-2a5 5 0 0 0-5 5v1.5H7V9.5h2.5V24h3.5V9.5h3.5z" />
    </svg>
  );
}
