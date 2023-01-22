import React, { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'


const BlogDetail = () => {

    // defining slug using useParams 
    const { slug } = useParams();

    const [blogs, setBlog] = useState({});

    // use effect to fetch data 
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/${slug}`);
                setBlog(res.data)
                console.log(res.data)
            }
            catch (err) {

            }
        }

        fetchData();
    }, [slug]);
    // turn first letter to uppercase 
    const firstLetterToUpper = (word) => {
        if (word) 
            return word.charAt(0).toUpperCase() + word.slice(1);
            return '';
    }

    const createBlog = () => {
        // safe content format due to summernote
        return {__html: blogs.content}

    }
    return (
        <div className="container mt-3">
            <h1 className="display-2">{blogs.title}</h1>
            <h2 className="text-muted mt-3">Category: {firstLetterToUpper(blogs.category)}</h2>
            <h4>{blogs.created}</h4>
            <div className="mt-5 mb-5" dangerouslySetInnerHTML={createBlog()} />
            <hr />
            <p className="lead mb-5"><Link to='/blog' className='font-weight-bold'>Back to Blogs</Link> </p>
        </div>
    )
}

export default BlogDetail;