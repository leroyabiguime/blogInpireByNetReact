import './sidebar.css'

const Sidebar = () => {
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
                <li className="sidebarListItem">Tech</li>
                <li className="sidebarListItem">Cinema</li>
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">Style</li>
                <li className="sidebarListItem">Music</li>
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
