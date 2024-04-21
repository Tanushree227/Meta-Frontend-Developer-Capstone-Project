import React from 'react'
import { Link } from 'react-router-dom'
import bannerImage from '../images/restauranfood.jpg';

export default function Header() {
  return (
    <header className='header'>
        <section>
            <div className='banner'>
                <h2>Little Lemon</h2>
                <h3>Manipal</h3>
                <p>We are a family owned Mediterranean restaurant, focussed on traditional recipes served with a modern twist.</p>
                <Link to="/reservation"><button aria-label='On CLick'>Reserve Table</button></Link>
            </div>
            <div className='banner-img'>
                <img src={bannerImage} alt='header snap' />
            </div>
        </section>
    </header>
  )
}
