import React from 'react';
import {Link} from 'react-router-dom';


function header(props) {
    return <h1>my bookcase</h1> 
    <React.Fragment>
    <Link to="/">Home</Link>
    <Link to="/bookcase" className="bookLink"> Bookcase</Link>
    </React.Fragment>
}
