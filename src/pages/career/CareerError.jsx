import { useRouteError ,Link } from "react-router-dom";

const CareerError = () => {
    const error = useRouteError()
    return ( 
            <>
            <div className="careeers-error">
                <h2>Error</h2>
                <p>{error.message}</p>
                <p>Go back to <Link to='/' >HomePage</Link></p>
            </div>
            </>
     );
}
 
export default CareerError;