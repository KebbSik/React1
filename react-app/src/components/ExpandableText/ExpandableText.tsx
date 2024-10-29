import React, { ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
  //   onClick: () => void;
  maxLength: number;
}

const ExpandableText = ({ children, maxLength }: Props) => {
  const [state, setState] = useState(true);
  const text = children as string;
  return (
    <div>
      {/* <span style={{ maxWidth: 10 }}>{children}</span> */}
      <span>{state ? text : `${text.substring(0, maxLength)}...`}</span>
      <button
        onClick={() => {
          setState(!state);
        }}
      >
        {state ? "Less" : "More"}
      </button>
    </div>
  );
};

export default ExpandableText;
