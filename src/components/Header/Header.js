import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <div className="card bg-info my-3">
        <h1><Link style={{ textDecoration: "none", color: "#FFC107" }} to="/" >What's In Your Fridge</Link></h1>
    </div>
);
export default Header;