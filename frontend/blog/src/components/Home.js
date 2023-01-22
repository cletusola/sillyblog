import React from "react";
import {Link} from 'react-router-dom';

const Home = () => {

    return (
        <div className="container">
            <div className="jumbotron">
                <h1 className="display-4">Welcome to Silly Blog</h1>
                <p className="lead">we make awesome blogs.</p>
                <hr className="my-4" />
                <p>check out our awesome blogs.</p>
                <p className="lead">
                <Link className="btn btn-primary btn-lg"  to='/blog' role="button">Check out our blogs</Link>
                </p>
            </div>
        </div>
    )
}

export default Home;