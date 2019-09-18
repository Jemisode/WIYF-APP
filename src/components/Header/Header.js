import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <h1><Link style={{ textDecoration: "none", color: "#169DB2" }} to="/" >What's In Your Fridge</Link></h1>
);
export default Header;