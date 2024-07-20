
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [ title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('pamilerin')
    const [isPending, setIsPending] = useState(false)
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsPending(true)
        const baseId = "appXPq1o0pcyPJYcD";
        const tableName = "data";
       
        const  headers = {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env["REACT_APP_API_KEY"]}`,
        }
        const data = {
            records: [
              {
                fields: {
                  title,
                  body,
                  author
                }
              }
            ]
          };
        axios.post(`https://api.airtable.com/v0/${baseId}/${tableName}`,data,{ headers})
        .then(response => {
            console.log(response)
            setIsPending(false)
            history.push('/')
        })

        
    }

    return ( 
        <div className="create">
            <h2>Add A new blog</h2>
            <form onSubmit={handleSubmit}>
                <label >Blog title:</label>
                <input
                type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label >Blog body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label >Blog author:</label>
                <select 
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="inioluwa">inioluwa</option>
                    <option value="pamilerin">pamilerin</option>
                </select>
                {!isPending && <button>Add blog</button>}
                {isPending && <button disabled>Loading...</button>}
            </form>
        </div>
     );
}
 
export default Create;