import axios from 'axios'
import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/Sidebar'
import './home.css'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router'

const Home = () => {
    const [posts, setPosts] = useState([]);
    const {search} = useLocation()
    const {cat} = useLocation()
    useEffect(() => {
     
    }, [])
    useEffect(() => {
    const fetchPosts = async () => {
       const res = await axios.get("/posts"+search)
       setPosts(res.data)
       console.log(res.data)
    }
    fetchPosts()
    }, [search])
    return (
        <>
            <Header/>
            <div className="home">
            <Posts posts={posts}/>
            <Sidebar/>
            </div>
        </>
    )
}

export default Home
