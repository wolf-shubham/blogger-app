import React from 'react';
import './Sidebar.css'

function Sidebar() {
    return (
        <div className='sidebar'>
            <h1>create blog</h1>
            <div className="categories">
                <h1>Categories</h1>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Tech</li>
                    <li className="sidebarListItem">Sports</li>
                    <li className="sidebarListItem">Finance</li>
                    <li className="sidebarListItem">Photography</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Misc</li>
                </ul>
            </div>
            <h3>Stay in Touch</h3>
            <div className="socialmedia">
                <i class="socialIcon fab fa-facebook-square"></i>
                <i class="socialIcon fab fa-linkedin"></i>
                <i class="socialIcon fab fa-github-square"></i>
            </div>
        </div>

    );
}

export default Sidebar;
