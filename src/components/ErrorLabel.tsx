import React from "react";

type Props = {
  label?: string;
};

const ErrorLabel = ({ label }: Props) => {
  if (!label) return <></>;
  return <div className="my-1 pl-3 text-xs text-red-500">{label}</div>;
};

export default ErrorLabel;
