import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css'

function Blog() {
    return <div className='blog'>
        <h1>blog title</h1>
        <img className='blogImage' src="https://images.pexels.com/photos/9289068/pexels-photo-9289068.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" />
        <div className="blogDetails">
            <h3>Author</h3>
            <Link className="link" to="/blog?username=Safak">
                Safak
            </Link>
            <h4>Published At</h4>
            <p className='blogText'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et odio   corrupti, doloremque facere quaerat ut itaque unde porro quo exercitationem fugiat similique voluptatibus at. Tempora suscipit numquam rem sit ipsam?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut delectus fuga eaque eos esse aperiam vitae earum provident, dolorem modi similique tempora, ratione non aspernatur odit voluptatibus dolor obcaecati quibusdam.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi cumque necessitatibus voluptatum ut asperiores odio magnam voluptatibus animi id at amet dolorem, eum atque fuga! Voluptates asperiores fugit voluptatibus dolorum.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, voluptate et. Sit quidem quam, voluptatum doloribus ex atque iure nam facere quibusdam quisquam! Earum, enim. Beatae incidunt aut dolor tempore?
            </p>
        </div>
    </div>;
}

export default Blog;
<h1>blog title</h1>
