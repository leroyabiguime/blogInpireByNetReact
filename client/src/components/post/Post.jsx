import './post.css'
import { Link } from 'react-router-dom'
const Post = ({post}) => {
    return (
        <div className="post">
        {post.photo && (
           <img className="postImg" alt='img-post' src={post.photo} />
        )}
        {/* <img className="postImg" alt='img-post' src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
           /> */}
           <div className="postInfo">
               <div className="postCats">
               {post.categories.map((categorie, index)=> (
                <span className="postCat" key={index}>{categorie?.name}</span>
               ))}
               </div>
           <Link to={`/post/${post._id}`}> 
                <span className="postTitle">
                    {post.title}
                </span>
           </Link>
               <hr/>
           <span className="postDate">
               {new Date(post.createdAt).toDateString()}
           </span>
           </div>
           <p className="postDesc">
           {post.desc}
           </p>
           
          
        </div>
    )
}

export default Post
