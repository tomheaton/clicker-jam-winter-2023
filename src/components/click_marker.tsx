import React from "react";
import { motion } from "framer-motion";

type Props = {
  money: number;
};

const ClickMarker: React.FC<Props> = ({ money }) => {

  const pos = ["text-left", "text-center", "text-right"][Math.floor(Math.random() * 3)];

  return (
    <motion.div
      className={"absolute w-full"}
      animate={"show"}
      transition={{ duration: 1.5 }}
      variants={{
        hide: { translateY: -100, opacity: 0 },
        show: {
          translateY: [0, -50, -100],
          opacity: [0, 1, 0],
        },
      }}
      initial={"hide"}
    >
      <p className={`text-white font-bold text-5xl ${pos}`}>
        ${money.toLocaleString()}
      </p>
    </motion.div>
  );
};

export default ClickMarker;
