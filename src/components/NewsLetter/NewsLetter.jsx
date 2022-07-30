import React from 'react';
import "./NewsLetter.css";
import { Container } from "react-bootstrap";

const newsletter = () => {
  return (
    <Container className="newsletter">
      <h1 className="newsletter-text">Join us</h1>
      <form className='newsletter-form'>
        <input className="newsletter-input" type="text" placeholder="Your Email" />
        <button className="newsletter-btn">Subscribe</button>
      </form>
    </Container>
  )
}

export default newsletter