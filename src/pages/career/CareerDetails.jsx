import { useLoaderData, useParams } from "react-router-dom";

const CareeerDetails = () => {
  const { id } =  useParams()
  const detail = useLoaderData()
    return ( 
           <>
           <div className="career-details">
              <h2> Job Details for {detail.title}</h2>
              <p>Starting Salary : {detail.salary}</p>
              <p>Location: {detail.location}</p>
           <div className="details">
             <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut a odio qui, voluptates, officia at fugit, earum tempore quod dolor dolorem nisi! Inventore asperiores similique assumenda consequatur aspernatur nihil nemo.</p>
           </div>
           </div>
           </>
     );
}
// loader function
export const CareerDetailsLoader = async ({ params })=>{
    const {id} = params;
    const res = await fetch('http://localhost:5000/careers/' + id )
    if(!res.ok){
        throw Error ('Could not fetch that Job')
    }

    return res.json()
}
 
export default CareeerDetails;

