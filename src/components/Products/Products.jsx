import React from 'react'
import './Products.css'
import {FaStar} from 'react-icons/fa'
import {Container} from 'react-bootstrap';
import Productimg1 from '../../assets/images/image4.png'
import Productimg2  from '../../assets/images/image1.png'
import Productimg3 from '../../assets/images/image2.png'
import Productimg4 from '../../assets/images/image3.png'

const Products = () => {
    return (
        <Container className="products">
            <h6 className="product-advice">Practice Advice</h6>
            <h2 className="coffee-products-text">Coffee Products</h2>
            <div className="products-wrapper">
                <div className="product-item">
                    <img src={Productimg1} className="Product-img" alt="Product Image" />
                    <p className="product-name">Coffee</p>
                    <FaStar className="star-icon" fill="#fdcd70" /> 
                    <span className="review"> 4.4 </span> 
                    <span className="num-review">429 reviews</span>
                    <p className="location">New Cairo, Egypt</p>
                </div>
                <div className="product-item">
                    <img src={Productimg2} className="Product-img" alt="Product Image" />
                    <p className="product-name">Coffee</p>
                    <FaStar className="star-icon" fill="#fdcd70"/> 
                    <span className="review"> 4.4 </span>
                    <span className="num-review">429 reviews</span>
                    <p className="location">New Cairo, Egypt</p>
                </div>
                <div className="product-item">
                    <img src={Productimg3} className="Product-img" alt="Product Image" />
                    <p className="product-name">Coffee</p>
                    <FaStar className="star-icon" fill="#fdcd70"/> 
                    <span className="review"> 4.4</span> 
                    <span className="num-review">429 reviews</span>
                    <p className="location">New Cairo, Egypt</p>
                </div>
                <div className="product-item">
                    <img src={Productimg4} className="Product-img" alt="Product Image" />
                    <p className="product-name">Coffee</p>
                    <FaStar className="star-icon" fill="#fdcd70"/> 
                    <span className="review"> 4.4 </span>
                    <span className="num-review">429 reviews</span>
                    <p className="location">New Cairo, Egypt</p>
                </div>
            </div>
        </Container>
    )
}

export default Products