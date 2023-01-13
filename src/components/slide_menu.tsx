const SlideMenu: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <div
      className={
        "bg-green-500 -left-1/2 top-0 w-1/2 h-2/3 z-[1] ease-in-out duration-300 fixed hover:left-0"
      }
    >
      <button className={"top-0 left-full absolute"}>Open menu</button>
      {children}
    </div>
  );
};

export default SlideMenu;
