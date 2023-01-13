import { useState } from "react";

const SlideMenu: React.FC<{
}> = ({}) => {

  const [visible, setVisible] = useState<boolean>(false);

        // className={"bg-green-500 fixed left-o top-0 w-screen h-screen" + 
        //   (visible ? "transform: translate3d(100vw, 0, 0) " : "transform: translate3d(-100vw, 0, 0) z-[1]")} 

  const handleClick = () => {
    // setVisible(true);
    setVisible((t) => (!t));
    console.log(visible);
  }

  return (
    <div>
      <div
        className={"fixed left-o top-0 w-screen h-screen z-[1]" + 
          (visible ? "bg-red-500" : "bg-green-500")} 
      >
      </div>
      <button onClick={() => handleClick()} className={"z-[10] absolute"}>
        Open menu {visible.toString()}
      </button>
    </div>
  );
};

export default SlideMenu;
