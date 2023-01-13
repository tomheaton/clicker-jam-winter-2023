import { useState } from "react";

const SlideMenu: React.FC<{
}> = ({}) => {

  const [visible, setVisible] = useState<boolean>(false);

  return (
    <div>
      <div
        className={"bg-red-500 fixed left-0 left-0 width-[100vw] height-[100vh]" + 
          (visible ? "transform: translate3d(100vw, 0, 0) " : "transform: translate3d(-100vw, 0, 0) ")} 
      >
      </div>
      <button onClick={() => setVisible(true)}>Open menu</button>
    </div>
  );
};

export default SlideMenu;
