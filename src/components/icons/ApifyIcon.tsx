import React from 'react';

export function ApifyIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 0L1.6 6v12L12 24l10.4-6V6L12 0zm0 3.3l7.6 4.4-7.6 4.4L4.4 7.7 12 3.3zm-8 6.1l7 4.1v8l-7-4.1V9.4zm16 8l-7 4.1v-8l7-4.1v8z" />
    </svg>
  );
}
