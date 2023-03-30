

import BlogList from "./BlogList";
import useFetch from "./useFetch";



const Home = () => {
    const baseId = "appXPq1o0pcyPJYcD";
    const tableName = "Inioluwa";
    
    const { data, isPending, error} = useFetch(`https://api.airtable.com/v0/${baseId}/${tableName}`)
 
    return ( 
        <div className='home'>
            <h2>Homepage</h2>
            { error && <div>{ error }</div>}
            { isPending && <div>Loading...</div>}
           { data && <BlogList blogs={data} title="All blogs"/>}
                     
        </div>
     );
}
 
export default Home;