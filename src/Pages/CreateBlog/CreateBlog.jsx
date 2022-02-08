import React from 'react';
import Header from '../../components/Header/Header';

function CreateBlog() {
    return <div>
        <Header />
        <form action="">
            <div className="blogcreate">
                <input type="file" name="file" id="" />
                <input type="text" name="BlogTitle" id="" placeholder='Blog Title' />
                <div className="blogtext">
                    <textarea type='text' name="" id="" cols="30" rows="10" placeholder='Blog Content'></textarea>
                </div>
                <button type="submit">Submit</button>
            </div>
        </form>
    </div>;
}

export default CreateBlog;
