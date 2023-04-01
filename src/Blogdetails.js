import { useHistory, useParams } from "react-router-dom";
import useFetch from './useFetch'

const Blogdetails = () => {
    const baseId = "appXPq1o0pcyPJYcD";
    const tableName = "data";
    const {id} = useParams();

    const apiKey = "keyGWHUIYI77zD7jY";

    const { data: blog, isPending, error} = useFetch(`https://api.airtable.com/v0/${baseId}/${tableName}/`+  id )
    const history = useHistory();
    
    const handleClick = () => {

        fetch( `https://api.airtable.com/v0/${baseId}/${tableName}/`+ blog.id, {
            method:'DELETE',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${apiKey}`,
            },
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
                <h2>{blog.fields.title}</h2>
                <p>Written by:{ blog.fields.author }</p>
                <div>{ blog.fields.body }</div>
                <button onClick={handleClick} > delete</button>
            </article>
           )}
        </div>
     );
}
 
export default Blogdetails;