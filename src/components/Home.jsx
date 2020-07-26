import React from 'react'
import banner from '../images/1.jpg'
import Product from './Product'
import cart1 from '../images/cart1.jpg'


const Home = () => {
    return (
        <div className='home'>
            <img src={banner} alt="banner" className='banner'/>

            <div className="home_row">

            <Product id='123' title='title' img={cart1} price='399' rating={4}/>
            </div>
        </div>
    )
}

export default Home
