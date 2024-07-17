import Sidebar from "@/sections/HomePage/Sidebar";

const Layout = ({ children, rightSideBar, style }) => {
  const [expand, setexpand] = useState(true);
  const isSmallScreen = useMediaQuery("(max-width:1224px)");
  function handleOpenMenuToggle() {
    setexpand(true);
  }
  function handleCloseMenuToggle() {
    setexpand(false);
  }
  return (
    <>
      <main className="main-wrapper">
        <Sidebar
          expand={expand}
          handleOpenMenuToggle={handleOpenMenuToggle}
          handleCloseMenuToggle={handleCloseMenuToggle}
        />
        <div className={"page-wrapper"} style={style}>
          {children}
        </div>
      </main>
    </>
  );
};

export default Layout;
