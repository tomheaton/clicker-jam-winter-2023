import React from "react";

type Props = {
  preText?: string,
  text: string,
  className?: string
};

const CurrencyText: React.FC<Props> = ({ preText, text, className }) => {
  return (
    <h1 className={`flex items-center ${className ?? ""}`}>
      {preText}
      <div className={`dust w-[1.5em] h-[1.5em]`} />
      {text}
    </h1>
  );
};

export default CurrencyText;
