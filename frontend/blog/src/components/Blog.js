import React,{useState, useEffect} from "react";
import axios from 'axios';
import { Link } from 'react-router-dom'

const Blog = () => {

    // defining const for use state 
    const [blogs, setBlogs] = useState([]);
    const [featuredBlog, setFeaturedBlog] = useState([]);

    // use effect to fetch featured blogs 
    useEffect(() => {
        const fetchFeaturedBlog = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/featured`)
                setFeaturedBlog(res.data[0]);
                console.log(res.data)

            }
            catch (err) {

            }
        }
        fetchFeaturedBlog();
    }, []);

    // use effect to fetch blogs 
    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/`)
                setBlogs(res.data);

            }
            catch (err) {

            }
        }
        fetchBlog();
    }, []);

    // function to set all first letter to upper case 
    const firstLetterToUpper = (word) => {
        if (word) 
            return word.charAt(0).toUpperCase() + word.slice(1);
            return '';
    }

    // function to get all blogs 
    const getBlogs = () => {
        let list = [];
        let result = [];

        // mapping between blogs 
        blogs.map(blogPost => {
            return list.push(
                <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div className="col p-4 d-flex flex-column position-static">
                        <strong className="d-inline-block mb-2 text-primary">{firstLetterToUpper(blogPost.category)}</strong>
                        <h3 className="mb-0">{blogPost.title}</h3>
                        <div className="mb-1 text-muted">{blogPost.created}</div>
                        <p className="card-text mb-auto">{blogPost.preface}</p>
                        <Link to={`/blog/${blogPost.slug}`} className="stretched-link">Continue reading</Link>
                    </div>
                    <div className="col-auto d-none d-lg-block">
                        <img width='220' height='250' src={blogPost.image} alt='thumbnails' />
                    </div>
            </div>
            )
        })

        // listing blogs 2 by 2
        for (let i =0; i < list.length; i+=2){
            result.push(
                <div key={1} className='row mb-2'>
                    <div className="col-md-6" >
                        {list[i]}
                    </div>
                    <div className="col-md-6" >
                        {list[i+1] ? list[i+1] : null}
                    </div>
                </div>
            )
        }
        return result;




    };

    // display safe method for blog preface due to summernote -- Note: this is no longer needed as i've changed from content to preface 
    const createBlog = () => {
        return {__html: featuredBlog.preface}

    }
    return (
        // displaying featuredBlog
        <div className="container">
            <div className="jumbotron p-4 p-md-5 mb-4 rounded text-bg-dark">
                <div id="blue" className="col-md-6 px-0">
                    <h1 className="display-4 fst-italic">{featuredBlog.title}</h1>
                    <p className="lead my-3" dangerouslySetInnerHTML={createBlog()} />
                    <p className="lead mb-0">
                        <Link to={`/blog/${featuredBlog.slug}`} className="text-white fw-bold">Continue reading...</Link>
                    </p>
                </div> 
            </div>
            {getBlogs()} 
        </div>
    );
}

export default Blog;