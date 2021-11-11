import axios from 'axios'
import { useLocation } from 'react-router'
import './singlePost.css'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { Context } from "../../context/Context"

const SinglePost = () => {
  const location = useLocation()
  const [post, setPost] = useState()
  const path = location.pathname.split("/")[2]
  const PF = 'http://localhost:5000/images/'
  const {user} = useContext(Context)
  const [title, setTitle] = useState()
  const [updateMode, setUpdateMode] = useState(false)
  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/"+ path)
      setPost(res.data)
      setTitle(res.data.title)
      setDesc(res.data.desc)
    }
    getPost()
  }, [path])
  const handleDelete = async () => {
    try {
    await axios.delete(`/posts/${post._id}`, 
    { data: {username: user.username}}
    )
    window.location.replace("/")
    } catch(err){}
  };
    return (
        <div className="singlePost">
          <div className="singlePostWrapper">
         {post?.photo &&
          <img
          className="singlePostImg"
          src={PF + post?.photo} alt="img"/>}
          {updateMode ? (<input type="text" 
          value={post?.title} 
          className="singlePostTitleInput" 
          autoFocus
          />
          ) : (
          <h1 className="singlePostTitle">
            {post?.title}
            {post?.username === user?.username && (
              <div className="singlePostEdit">
                <i className="singlePostIcon fas fa-edit" onClick= {() =>setUpdateMode(true)}></i>
                <i className="singlePostIcon far fa-trash-alt" onClick={handleDelete}></i>
              </div>
            )}
            
          </h1>
           )
          }
          <div className="singlePostInfo">
          <span className="singlePostAuthor">
          Author:
          <Link to={`/?user=${post?.username}`} className="link">
           <b>{post?.username}</b>
          </Link>
           </span>
          <span className="singlePostDate">1 hour ago</span>
          </div>
          {updateMode ?  (<textarea className="singlePostDescInput" value= {post.desc} />)
          : (<p className="singlePostDesc">
            {post?.desc}
          </p>)}
          </div>
        </div>
    )
}

export default SinglePost
