import React, { useEffect, useState } from 'react';
import Blogs from '../../components/Blogs/Blogs';
import Sidebar from '../../components/Sidebar/Sidebar';
import Topbar from '../../components/Topbar/Topbar';
import './Home.css'
import axios from 'axios'
import { useLocation } from 'react-router-dom';

function Home() {
    const [blogs, setBlogs] = useState([])
    const { search } = useLocation()

    useEffect(() => {
        const fetchBlogs = async () => {
            const res = await axios.get('/blog' + search)
            // console.log(res)
            setBlogs(res.data)
        }
        fetchBlogs()
    }, [search])

    return <div>
        <Topbar />
        <div className="homePage">
            <Sidebar />
            <Blogs blogs={blogs} />
        </div>

    </div>;
}

export default Home;
