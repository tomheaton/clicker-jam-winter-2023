import { useState } from "react";

const SlideMenu: React.FC<{
}> = ({}) => {

  return (
    <div>
      <div
        className={"scale-0 bg-green-500 fixed left-o top-0 w-screen h-screen z-[1] peer-hover:bg-red-500"}
      >
      </div>
      <button className={"z-[10] absolute peer left-[200px] top-[200px]"}>
        Open menu
      </button>
    </div>
  );
};

export default SlideMenu;
