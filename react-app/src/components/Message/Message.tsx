import React from "react";

let count = 0;

const Message = () => {
  //   let count = 0;
  console.log("Message called", count);
  count++;
  return <div>Message {count}</div>;
};

export default Message;
