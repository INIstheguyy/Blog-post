import { Link } from "react-router-dom";

const notFound = () => {
    return (
        <div className="not-found">
            <h2>Sorry,this page doesn't exist</h2>
            <Link to='/'>
            <button>Back to Home</button> 
            </Link>
        </div>
     );
}
 
export default notFound;