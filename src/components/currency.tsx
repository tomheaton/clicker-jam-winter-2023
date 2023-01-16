import React from "react";

export const CurrencyImage: React.FC<{ size: number }> = ({ size }) => {
  return (
    <div className={`dust w-${size} h-${size}`} />
  );
};

type Props = {
  preText?: string,
  text: string,
  className?: string
};

export const CurrencyText: React.FC<Props> = ({ preText, text, className }) => {
  return (
    <h1 className={`flex items-center ${className ?? ""}`}>
      {preText}
      <div className={`dust w-[1.5em] h-[1.5em]`} />
      {text}
    </h1>
  );
};
