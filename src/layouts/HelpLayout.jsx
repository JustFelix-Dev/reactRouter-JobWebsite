import { NavLink, Outlet } from "react-router-dom";


const HelpLayout = () => {
    return ( 
           <>
           <div className="help-layout">
           <h2>Help Section</h2>
           <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, sunt quod!</p>

           <nav>
            <NavLink to={'faq'}>View the FAQ</NavLink>
            <NavLink to={'contacts'}>Contact Us</NavLink>
           </nav>
           <Outlet/>
           </div>
           </>
     );
}
 
export default HelpLayout;