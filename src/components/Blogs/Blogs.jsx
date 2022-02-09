import React from 'react';
import Blog from '../Blog/Blog';
import './Blogs.css'

function Blogs({ blogs }) {
    return <div className='blogs'>
        {blogs.map(blog => (
            <Blog blog={blog} />
        ))}
    </div>;
}

export default Blogs;
