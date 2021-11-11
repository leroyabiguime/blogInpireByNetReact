import { useContext, useState } from 'react'
import './write.css'
import axios from "axios"
import { Context } from "../../context/Context"

const Write = () => {
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [file, setFile] = useState('')
    const {user} = useContext(Context)
    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            username: user.username,
            title,
            desc,
        }
        if(file) {
            const data = FormData();
            const filename = Date.now() + file.name
            data.append("name", filename)
            data.append("file",file )
            newPost.photo = filename;
            try {
                await axios.post("/upload", data)
            } catch (error) {}
        }
        try {
            const res = await axios.post("/posts", newPost)
            window.location.replace('/post/' + res.data._id)
        }catch (error) {}
    }
    return (
        <div className="write">
        {file &&
          <img className="writeImg" alt="writter"
          src={URL.createObjectURL(file)}
           />
        }
            <form className="writeForm" onSubmit={handleSubmit}>
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fas fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display: 'none'}}/>
                    <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
                </div>
                <div className="writeFormGroup">
                    <textarea className="writeInput writeText" placeholder="Tell your story..." type="text"></textarea>
                </div>
                <button className="writeSubmit" type="button">Publish</button>
            </form>
        </div>
    )
}

export default Write
