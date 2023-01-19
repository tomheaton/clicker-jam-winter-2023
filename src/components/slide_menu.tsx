import React, { useState } from "react";

type Props = {
  children?: React.ReactNode;
  fromLeft?: boolean;
  startPinned?: boolean;
};

const SlideMenu: React.FC<Props> = ({
                                      children,
                                      fromLeft = false,
                                      startPinned = false,
                                    }) => {
  const [pinned, setPinned] = useState<boolean>(startPinned);

  const notPinnedClassName = `z-[1] top-0 h-2/3 ease-in-out duration-300 fixed w-1/3
    ${fromLeft ? `-left-1/3 hover:left-0` : `-right-1/3 hover:right-0`}`;

  const pinnedClassName = `z-[1] top-0 h-2/3 fixed w-1/3
    ${fromLeft ? `left-0` : `right-0`}`;

  return (
    <div className={pinned ? pinnedClassName : notPinnedClassName}>
      {/* Background image */}
      <img
        className={"pixel w-full h-full absolute z-[-9]"}
        src={fromLeft ? "assets/ui/shop_bg.png" : "assets/ui/stats_bg.png" }
        alt={"Slide menu background image"}
      />

      {/* 'Show Menu' button */}
      <button
        className={`-z-10 w-20 h-20 top-0 fixed ${
          fromLeft ? "left-0" : "right-0"
        }`}
      >
        <img
          className={"pixel w-full h-full"}
          src={`assets/ui/${
            fromLeft
              ? "shop_tab.png"
              : "stats_tab.png"
          }`}
          alt={`Slide menu arrow right sprite`}
        />
      </button>

      {/* Pin button */}
      <button
        className={`absolute w-20 h-20 ${fromLeft ? "right-1" : "float-left"} z-10`}
        onClick={() => setPinned(t => !t)}
      >
        <img
          className={`pixel w-full h-full ${fromLeft ? "" : "-scale-x-100"}`}
          src={`assets/ui/${
            pinned ? "pin_button_pinned.png" : "pin_button_not_pinned.png"
          }`}
          alt={"Pin button image"}
        />
      </button>

      <div className={"h-full w-full overflow-y-scroll"}>
        {children}
      </div>
    </div>
  );
};

export default SlideMenu;
