import React from "react";

interface IProps {
  copyMessage: string;
}

const CopyMessage: React.FC<IProps> = ({ copyMessage }) => {
  return (
    <>
      <h2>{copyMessage}</h2>
    </>
  );
};

export default CopyMessage;
