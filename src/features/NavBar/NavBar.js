import React from 'react';
import './NavBar.css';

const NavBar = (props) => {
    return (
        <div className="subreddits">
            <p>{props.nav.title}</p>
        </div>
    )
};

export default NavBar;