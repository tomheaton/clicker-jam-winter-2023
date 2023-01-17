import React from "react";
import { motion } from "framer-motion";
import { Marker } from "@utils/types";

type Props = {
  marker: Marker;
};

const ClickMarker: React.FC<Props> = ({ marker: { money, location } }) => {
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
      <p className={`text-white font-bold text-5xl ${location}`}>
        ${money.toLocaleString()}
      </p>
    </motion.div>
  );
};

export default ClickMarker;
