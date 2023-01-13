import { useState } from "react";

const SlideMenu: React.FC<{
  fromLeft: boolean; // true: comes from left, false: comes from right
  children: React.ReactNode;
  startPinned?: boolean;
}> = ({ fromLeft, startPinned, children }) => {

  const [pinned, setPinned] = useState<boolean>(startPinned);

  const notPinnedClassNameStr = `bg-green-500 z-[1] top-0 h-2/3 ease-in-out duration-300 fixed w-1/3
    ${fromLeft ? 
      `-left-1/3 hover:left-0` :
      `-right-1/3 hover:right-0`
    }`;

  const pinnedClassNameStr = `bg-green-500 z-[1] top-0 h-2/3 fixed w-1/3
    ${fromLeft ? 
      `left-0` :
      `right-0`
    }`;

  const menuClassNameStr = pinned ? pinnedClassNameStr : notPinnedClassNameStr;

  const buttonClassNameStr = `-z-10 w-20 h-20 top-0 fixed ${fromLeft ? "left-0" : "right-0 "}`;

  // NOTE: when changing the width and height ('h-[50px]') also change the 'calc()' part
  const pinButtonClassNameStr = `h-[50px] w-[50px] bg-red-500 top-0 absolute ${fromLeft ? 
    "left-[calc(100%-50px)]" :
    "right-[calc(100%-50px)] "
  }`;

  return (
    <div
      className={menuClassNameStr}
    >
      { /* 'Show Menu' button */ }
      <button className={buttonClassNameStr}>
        <img
          style={{
            imageRendering: "pixelated",
          }}
          className={"w-full h-full"}
          src={`assets/UI/${fromLeft ? "slide_menu_arrow_right.png" : "slide_menu_arrow_left.png" }`}
          alt={`Slide menu arrow right sprite`}
        />
      </button>

      { /* Pin button */ }
      <button
        className={pinButtonClassNameStr}
        onClick={() => setPinned((t) => !t)}
      >
        Pin
      </button>

      { children }
    </div>
  );
};

export default SlideMenu;