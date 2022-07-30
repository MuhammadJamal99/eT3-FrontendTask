import React from 'react';
import './Navbar.css';
import { FaSearch, FaArrowRight } from 'react-icons/fa';
import { Container, Row, Col } from 'react-bootstrap';

const Navbar = () => {
    return (
            <div className="nav">
                <div className="nav-left">&nbsp;</div>
                <div className="nav-middle">
                    <form className="nav-form">
                        <input className="nav-form-input" type="text" placeholder="What Do You Want To Learn?" />
                        <FaSearch className="nav-form-icon" />
                    </form>
                </div>
                <div className="nav-right">
                    <form className="nav-right-form">
                        <button className="login">
                            Login
                        </button>
                        <button className="join">
                            Join For Free <FaArrowRight className="join-icon" />
                        </button>
                    </form>
                </div>
            </div>
    )
}

export default Navbar