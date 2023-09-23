import './Header.css';
import React from 'react';
import { FaRedditAlien } from 'react-icons/fa';

const Header = () => {
    return (
        <header>
            <div className="logo">
                <FaRedditAlien className="logo-icon" />
                <p className="title">
                Reddit<span className="title-secondary">Client</span>
                </p>
            </div>
        </header>
    )
};

export default Header;