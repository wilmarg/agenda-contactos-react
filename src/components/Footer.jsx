import React from 'react'

const Footer = () => {
  
  return (
    <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
        <div className="container-fluid">
            <span className=" text-center navbar-brand mb-0 h1 ">
                {" "}Wilmar Galvis - &copy; {new Date().getFullYear()}{" "}
            </span>
        </div>
    </nav>   

    )
};

export default Footer;