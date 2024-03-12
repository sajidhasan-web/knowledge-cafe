import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";



const Blogs = ({handleBookmark, handleAddMinutes}) => {

    const [blogs, setBlogs] = useState([])

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

    return (
        <div className="col-span-2">
             {
                blogs.map(blog => <Blog key={blog.id} blog={blog} handleBookmark={handleBookmark} handleAddMinutes={handleAddMinutes}></Blog>)
             }
        </div>
    );
};





export default Blogs;