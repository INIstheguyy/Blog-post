

import BlogList from "./BlogList";
import useFetch from "./useFetch";



const Home = () => {
    
    const { data, isPending, error} = useFetch('https://api.airtable.com/v0/appXPq1o0pcyPJYcD/data')

    if(!data) {
        return <h3>Loading...</h3>
    }
 
    return ( 
        <div className='home'>
            <h2>Homepage</h2>
            { error && <div>{ error }</div>}
            { isPending && <div>Loading...</div>}
           { data && <BlogList blogs={data["records"]} title="All blogs"/>}
        </div>
     );
}
 
export default Home;