import React from 'react'
import './MakeCaffee.css'
import { FaCircle } from 'react-icons/fa';
import { TbRectangleVertical } from 'react-icons/tb';
import coffeeImg from '../../assets/images/image.png'


const MakeCaffee = () => {
  return (
    <div className='make-coffee'>
        <div className="coffee-left">
            <img className="coffee-img" src={coffeeImg} alt="Coffee Image" />
            <TbRectangleVertical className="rect-icon" size={150} fill="#ee8c34" strokeWidth={0} />
            <FaCircle className="circle-icon" size={60} fill="#fdb921" />
        </div>
        <div className="coffee-right">
            <hr className="first-line" />
            <p className="coffee-text">
                Make Your <br /> Own Caffee
            </p>
            <hr className='second-line' />
        </div>
    </div>
  )
}

export default MakeCaffee