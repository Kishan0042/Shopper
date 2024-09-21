import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionxbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>An e-commerce website is an online platform that facilitates the
                buying and selling of products or services over the internet. It
                serves as a virtual marsketplace where businesses and individul can
                showcase their products, interact with customers, and conduct
                transactions without the need for a physical presence. E.commerce 
                websites have gained immense popularity due to their convenience
                accessibility, and the global reach they offer.
            </p>
            <p>
                E-commerce website typically display products or services along with
                detailed descriptions, image, prices, and any available variations
                (e.g., sizes, colors). Each product uasally has its own dedicated page 
                with relevant information
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox