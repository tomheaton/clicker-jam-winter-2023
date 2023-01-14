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

  const notPinnedClassName = `bg-green-500 z-[1] top-0 h-2/3 ease-in-out duration-300 fixed w-1/3
    ${fromLeft ? `-left-1/3 hover:left-0` : `-right-1/3 hover:right-0`}`;

  const pinnedClassName = `bg-green-500 z-[1] top-0 h-2/3 fixed w-1/3
    ${fromLeft ? `left-0` : `right-0`}`;

  return (
    <div className={pinned ? pinnedClassName : notPinnedClassName}>
      {/* Background image */}
      <img
        className={"w-full h-full absolute z-[-9]"}
        style={{ imageRendering: "pixelated" }}
        src={"assets/ui/slide_menu_background.png"}
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
              ? "slide_menu_arrow_right.png"
              : "slide_menu_arrow_left.png"
          }`}
          alt={`Slide menu arrow right sprite`}
        />
      </button>

      {/* Pin button */}
      <button
        className={`w-20 h-20 ${fromLeft ? "float-right" : "float-left"} z-10`}
        onClick={() => setPinned((t) => !t)}
      >
        <img
          className={`w-full h-full ${fromLeft ? "" : "-scale-x-100"}`}
          style={{ imageRendering: "pixelated" }}
          src={`assets/ui/${
            pinned ? "pin_button_pinned.png" : "pin_button_not_pinned.png"
          }`}
          alt={"Pin button image"}
        />
      </button>

      <div>{children}</div>
    </div>
  );
};

export default SlideMenu;
