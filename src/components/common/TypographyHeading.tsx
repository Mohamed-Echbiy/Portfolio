import React from "react";

interface TypoTypes {
  children: React.ReactNode;
  className?: String;
}

export default function TypographyHeading({ children, className }: TypoTypes) {
  return (
    <div
      className={`text-3xl sm:text-4xl font-semibold text-primary-900 ${className}`}
    >
      {children}
    </div>
  );
}
