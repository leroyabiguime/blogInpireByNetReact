import axios from 'axios'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import './sidebar.css'

const Sidebar = () => {
    const [cats,setCats] = useState()
    useEffect( () => {
        const getCat = async ()=>{
            const categories = await axios.get('/categories')
            setCats(categories.data)
        }
        getCat()
    }, [])
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                 <span className="sidebarTitle">ABOUT ME</span>
                 <img src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg" alt="e"/>
                 <p>lorem. Lorem ipsum dolor sit amet, consectetur</p>
            </div>
            <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
            {cats?.map((categorie, index) => (
                <Link key={index} to={`/?cat=${categorie.name}`} className="link">
                <li className="sidebarListItem" key={index}>{categorie?.name}</li>
                </Link>
            ))}
            </ul>
            </div>
            <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
            <i className="sidebarIcon fab fa-facebook-square"></i>
            <i className="sidebarIcon fab fa-twitter-square"></i>
            <i className="sidebarIcon fab fa-pinterest-square"></i>
            <i className="sidebarIcon fab fa-instagram-square"></i>
            </div>
            </div>
        </div>
    )
}

export default Sidebar
