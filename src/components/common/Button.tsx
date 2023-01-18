import React, { ReactComponentElement, ReactNode } from "react";

interface ButtonProps {
  text: String;
  icon?: React.ReactNode;
}

export default function Button({ text, icon }: ButtonProps) {
  return (
    <button className="button text-white w-fit gap-2 capitalize flex justify-between p-2 bg-emerald-900 rounded">
      <span>{text}</span>
      {icon && <span>{icon}</span>}
    </button>
  );
}
