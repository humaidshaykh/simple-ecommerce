import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        margin: "30px"
    }}>
        <Link to="" style={{ textDecoration: "none", color: "#fff" }}>Home</Link>
        <Link to="about" style={{ textDecoration: "none", color: "#fff" }}>About</Link>
        <Link to="shop" style={{ textDecoration: "none", color: "#fff" }}>Shop</Link>
        <Link to="contact" style={{ textDecoration: "none", color: "#fff" }}>Contact</Link>
    </div>
  )
}

export default Navbar
