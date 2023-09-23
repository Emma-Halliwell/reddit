import React from 'react';
import './NavBar.css';

const NavBar = (props) => {
    return (
        <div>
            <p>{props.nav.display_name_prefixed}</p>
        </div>
    )
};

export default NavBar;