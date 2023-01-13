const SlideMenu: React.FC<{
  fromLeft: boolean; // true: comes from left, false: comes from right
  children: React.ReactNode;
}> = ({ fromLeft, children }) => {

  // NOTE: Change this to something like '1/2' or whatever fractino you want to change how far
  // into the middle of the screen it goes (1/2 being going up to half)
  const widthSize = "1/3";

  const menuClassNameStr = `bg-green-500 z-[1] top-2 h-2/3 ease-in-out duration-300 fixed w-${widthSize}
    ${fromLeft ? 
      `-left-${widthSize} hover:left-0` : /*  left  */
      `-right-${widthSize} hover:right-0`   /*  right */
    }`;

  const buttonClassNameStr = `top-0 absolute ${fromLeft ? "left-full " : "right-full "}`;

  return (
    <div
      className={menuClassNameStr}
    >
      <button className={buttonClassNameStr}>Open menu</button>
      {children}
    </div>
  );
};

export default SlideMenu;
