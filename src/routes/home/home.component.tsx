import { Outlet } from "react-router-dom";

import Directory from "../../Components/directory/directory.component.tsx";

const Home = () => {
  return (
    <div> 
        <Directory/>
        <Outlet />
    </div>
  );
};


export default Home ;
