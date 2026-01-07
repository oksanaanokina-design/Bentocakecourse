import { ReactNode } from 'react';

interface AnimatedGradientProps {
  children: ReactNode;
  className?: string;
}

export function AnimatedGradientBackground({ children, className = '' }: AnimatedGradientProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 animate-gradient-shift bg-gradient-to-br from-[#1a1410] via-[#2a1f18] to-[#1a1410] bg-[length:200%_200%]" />
      <div className="absolute inset-0 opacity-20 animate-pulse-slow" 
           style={{
             backgroundImage: 'url(data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23D4B896" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E)'
           }}
      />
      <div className="relative">
        {children}
      </div>
    </div>
  );
}

export function AnimatedGradientText({ children, className = '' }: AnimatedGradientProps) {
  return (
    <span className={`text-transparent bg-clip-text bg-gradient-to-r from-[#D4B896] via-[#E5C9A7] to-[#C9A882] bg-[length:200%_auto] animate-gradient-text ${className}`}>
      {children}
    </span>
  );
}
