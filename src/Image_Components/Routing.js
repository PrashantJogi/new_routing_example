import { Link ,Outlet } from "react-router-dom";

 const Routing = () => {
  // let location = useLocation();

  //  console.log(useLocation(), "location from home");

  return (
    <>
      <h1>MARVELS</h1>
      
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/AboutUS">
          <button>AboutUS</button>
        </Link>
        <Link to="/ContactUS">
          <button>ContactUS</button>
        </Link>
        <Link to="/Gallery">
          <button>Gallery</button>
        </Link>

        <nav>
            <Outlet/>
        </nav>
      
    </>
  );
};

export default Routing;