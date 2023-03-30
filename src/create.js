
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
        const tableName = "Inioluwa";
        const apiKey = "patsWJNimoy7zyKe3";

        const blog = {title, body, author};
        fetch(`https://api.airtable.com/v0/${baseId}/${tableName}`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer${apiKey}`,
            },
            body: JSON.stringify(blog)
        }).then(response => {
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