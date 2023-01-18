import React from "react";

interface TypographyTypes {
  children: React.ReactNode;
  className?: String;
}

export default function TypographyParagraphs({
  children,
  className,
}: TypographyTypes) {
  return (
    <div className={`text-xs sm:text-sm md:text-base ${className}`}>
      {children}
    </div>
  );
}
