import { useHistory, useParams } from "react-router-dom";
import useFetch from './useFetch'

const Blogdetails = () => {
    const baseId = "appXPq1o0pcyPJYcD";
    const tableName = "Inioluwa";
    const {id} = useParams();
    const { data: blog, isPending, error} = useFetch(`https://api.airtable.com/v0/${baseId}/${tableName}`+  id )
    const history = useHistory();
    
    const handleClick = () => {

        fetch( `https://api.airtable.com/v0/${baseId}/${tableName}`+ blog.id,{
            method:'DELETE'
        }).then(() => {
            history.push('/')
        });
    }

    return ( 
        <div className="blog-details">
           {isPending && <div>Loading...</div>}
           {error && <div>{ error }</div>}
           { blog && (
            <article>
                <h2>{blog.title}</h2>
                <p>Written by:{ blog.author }</p>
                <div>{ blog.body }</div>
                <button onClick={handleClick} > delete</button>
            </article>
           )}
        </div>
     );
}
 
export default Blogdetails;