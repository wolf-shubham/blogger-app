import React from 'react';
import Blogs from '../../components/Blogs/Blogs';
import Sidebar from '../../components/Sidebar/Sidebar';
import Topbar from '../../components/Topbar/Topbar';
import './Home.css'

function Home() {
    return <div>
        <Topbar />
        <div className="homePage">
            <Sidebar />
            <Blogs />
        </div>

    </div>;
}

export default Home;
