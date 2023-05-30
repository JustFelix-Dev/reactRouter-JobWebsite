import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
            <>
            <h1>Oops!.Page Not Found!</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores consectetur repellat repellendus nihil iste corrupti velit nam quidem vero officiis?</p>
            <p>Go to <Link to='/'>HomePage</Link></p>
            </>
     );
}
 
export default NotFound;