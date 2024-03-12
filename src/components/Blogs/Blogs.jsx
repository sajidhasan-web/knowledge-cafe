import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = () => {

    const [blogs, setBlogs] = useState([])

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

    return (
        <div className="col-span-2">
            <h2 className="text-3xl">Blogs: {blogs.length}</h2>
             {
                blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
             }
        </div>
    );
};

export default Blogs;