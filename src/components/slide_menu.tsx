const SlideMenu: React.FC<{
  fromLeft: boolean; // true: comes from left, false: comes from right
  children: React.ReactNode;
}> = ({ fromLeft, children }) => {

  const menuClassNameStr = `bg-green-500 z-[1] top-0 h-2/3 ease-in-out duration-300 fixed w-1/3
    ${fromLeft ? 
      `-left-1/3 hover:left-0` : /*  left  */
      `-right-1/3 hover:right-0`   /*  right */
    }`;

  const buttonClassNameStr = `w-20 h-20 top-0 absolute ${fromLeft ? "left-full " : "right-full "}`;

  return (
    <div
      className={menuClassNameStr}
    >
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
      {children}
    </div>
  );
};

export default SlideMenu;
