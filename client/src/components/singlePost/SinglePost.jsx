import axios from 'axios'
import { useLocation } from 'react-router'
import './singlePost.css'
import { useEffect } from 'react'

const SinglePost = () => {
  const location = useLocation()
  const path = location.pathname.split("/")[2]
  console.log(path)
  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/"+ path)
      console.log(res)
    }
    getPost()
  }, [path])
    return (
        <div className="singlePost">
          <div className="singlePostWrapper">
          <img
          className="singlePostImg"
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="img"
          />
          <h1 className="singlePostTitle">
            Lorem ipsum dolor sit amet.
            <div className="singlePostEdit">
            <i className="singlePostIcon fas fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
            </div>
          </h1>
          <div className="singlePostInfo">
          <span className="singlePostAuthor">Author: <b>Safak</b></span>
          <span className="singlePostDate">1 hour ago</span>
          </div>
          <p className="singlePostDesc">
              Lorem ipsum dolor sit am, consectetur adipiscing el aspect et non
              Lorem ipsum dolor sit am, consectetur adipiscing el aspect et non
              Lorem ipsum dolor sit am, consectetur adipiscing el aspect et non
              Lorem ipsum dolor sit am, consectetur adipiscing el aspect et non
              Lorem ipsum dolor sit am, consectetur adipiscing el aspect et non
              Lorem ipsum dolor sit am, consectetur adipiscing el aspect et non
              Lorem ipsum dolor sit am, consectetur adipiscing el aspect et non
              Lorem ipsum dolor sit am, consectetur adipiscing el aspect et non
              Lorem ipsum dolor sit am, consectetur adipiscing el aspect et non
              Lorem ipsum dolor sit am, consectetur adipiscing el aspect et non
              Lorem ipsum dolor sit am, consectetur adipiscing el aspect et non
              Lorem ipsum dolor sit am, consectetur adipiscing el aspect et non
              Lorem ipsum dolor sit am, consectetur adipiscing el aspect et non
              Lorem ipsum dolor sit am, consectetur adipiscing el aspect et non
              Lorem ipsum dolor sit am, consectetur adipiscing el aspect et non
              Lorem ipsum dolor sit am, consectetur adipiscing el aspect et non
              Lorem ipsum dolor sit am, consectetur adipiscing el aspect et non
              Lorem ipsum dolor sit am, consectetur adipiscing el aspect et non
              Lorem ipsum dolor sit am, consectetur adipiscing el aspect et non
              Lorem ipsum dolor sit am, consectetur adipiscing el aspect et non
              Lorem ipsum dolor sit am, consectetur adipiscing el aspect et non
              Lorem ipsum dolor sit am, consectetur adipiscing el aspect et non
              Lorem ipsum dolor sit am, consectetur adipiscing el aspect et non
              Lorem ipsum dolor sit am, consectetur adipiscing el aspect et non
              Lorem ipsum dolor sit am, consectetur adipiscing el aspect et non
              Lorem ipsum dolor sit am, consectetur adipiscing el aspect et non
              Lorem ipsum dolor sit am, consectetur adipiscing el aspect et non
              Lorem ipsum dolor sit am, consectetur adipiscing el aspect et non
              Lorem ipsum dolor sit am, consectetur adipiscing el aspect et non
              Lorem ipsum dolor sit am, consectetur adipiscing el aspect et non
              Lorem ipsum dolor sit am, consectetur adipiscing el aspect et non
              Lorem ipsum dolor sit am, consectetur adipiscing el aspect et non
              Lorem ipsum dolor sit am, consectetur adipiscing el aspect et non
              Lorem ipsum dolor sit am, consectetur adipiscing el aspect et non
              Lorem ipsum dolor sit am, consectetur adipiscing el aspect et non
              Lorem ipsum dolor sit am, consectetur adipiscing el aspect et non
              Lorem ipsum dolor sit am, consectetur adipiscing el aspect et non
              Lorem ipsum dolor sit am, consectetur adipiscing el aspect et non
              Lorem ipsum dolor sit am, consectetur adipiscing el aspect et non
              Lorem ipsum dolor sit am, consectetur adipiscing el aspect et non
          </p>
          </div>
        </div>
    )
}

export default SinglePost
