import React, { useState } from "react";
import styles from "./Like.module.css";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [status, setStatus] = useState(false);

  const toggle = () => {
    setStatus(!status);
    onClick();
  };

  if (status) {
    return (
      <div>
        <IoMdHeart className={styles.heart} onClick={toggle} />
      </div>
    );
  }
  return (
    <div>
      <IoMdHeartEmpty className={styles.heart} onClick={toggle} />
    </div>
  );
};

export default Like;
