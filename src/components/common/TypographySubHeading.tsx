import React from "react";

interface TypoTypes {
  children: React.ReactNode;
  className?: String;
}

export default function TypographySubHeading({
  children,
  className,
}: TypoTypes) {
  return <div className={`text-lg sm:text-xl ${className}`}>{children}</div>;
}
