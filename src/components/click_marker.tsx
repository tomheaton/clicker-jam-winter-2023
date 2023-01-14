import React from "react";
import { motion } from "framer-motion";

type Props = {
  money: number;
};

const ClickMarker: React.FC<Props> = ({ money }) => {
  return (
    <div className={"dev absolute w-full mx-auto"}>
      click marker {money}
      <br />
      <motion.div
        className={"absolute w-full"}
        animate={"show"}
        variants={{
          hide: { translateY: -80, opacity: 0 },
          show: {
            translateY: [0, -40, -60],
            opacity: [0, 1, 0],
          },
        }}
        initial={"hide"}
      >
        gonkie
      </motion.div>
    </div>
  );
};

export default ClickMarker;
