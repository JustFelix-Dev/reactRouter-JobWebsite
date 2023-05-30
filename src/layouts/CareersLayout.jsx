import { Outlet } from "react-router-dom";

const CareersLayout = () => {
    return ( 
           <>
           <div className="careers-layout">
            <h2>Jobs Page</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus sequi incidunt eos possimus neque culpa facere, itaque magni autem nesciunt.</p>
           </div>
           <Outlet/>
           </>
     );
}
 
export default CareersLayout;