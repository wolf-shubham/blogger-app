import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function SinglePost() {

    const location = useLocation()
    const path = location.pathname.split('/')[2];
    const [blog, setBlog] = useState({})

    useEffect(() => {
        const getBlog = async () => {
            const res = await axios.get('/blog/' + path)
            setBlog(res.data)
        }
        getBlog()
    }, [path])

    return (
        <div className='blog'>
            <h1>{blog.title}</h1>
            <img className='blogImage' src="https://images.pexels.com/photos/9289068/pexels-photo-9289068.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" />
            <div className="blogDetails">

                <Link className="link" to={`/?username=${blog.username}`}>
                    <h3>Author: {blog.username}</h3>
                </Link>
                <h4>Published At: {new Date(blog.createdAt).toDateString()}</h4>
                <p className='blogText'>
                    {blog.desc}
                </p>
            </div>
        </div>
    )
}

export default SinglePost