import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css'

function Blog({ blog }) {
    return <div className='blog'>
        <Link to={`./blog/${blog._id}`}><h1>{blog.title}</h1></Link>
        <img className='blogImage' src="https://images.pexels.com/photos/9289068/pexels-photo-9289068.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" />
        <div className="blogDetails">
            <h3>Author</h3>
            <Link className="link" to="/blog?username=Safak">
                Safak
            </Link>
            <h4>Published At: {new Date(blog.createdAt).toDateString()}</h4>
            <p className='blogText'>
                {blog.desc}
            </p>
        </div>
    </div>;
}

export default Blog;

