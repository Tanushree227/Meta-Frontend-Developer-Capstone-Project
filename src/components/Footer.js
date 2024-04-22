import React from 'react'
import logo from '../images/small_logo.png';

export default function Footer() {
  return (
    <footer>
        <section>
            <div className='company-info'>
                <img src={logo} alt='' />
                <p>We are a family owned Mediterranean restaurant, focussed on traditional recipes served with a modern twist.</p>
            </div>
            <div>
                <h3>Important Links</h3>
                <ul>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/booking'>Reservations</a></li>
                    <li><a href='/about'>About</a></li>
                    <li><a href='/menu'>Menu</a></li>
                    <li><a href='/order'>Order Online</a></li>
                </ul>
            </div>
            <div>
                <h3>Contact</h3>
                <ul>
                    <li>Address: <br />Manipal</li>
                    <li>Phone: <br />9876543210</li>
                    <li>Email: <br />littlelemon@gmail.com</li>
                </ul>
            </div>
            <div>
                <h3>Social Media Links</h3>
                <ul>
                    <li><a href='https://www.instagram.com'>Instagram</a></li>
                    <li><a href='https://www.facebook.com/'>Facebook</a></li>
                    <li><a href='https://twitter.com/'>Threads</a></li>
                    <li><a href='https://www.linkedin.com/'>LinkedIn</a></li>
                    <li><a href='https://in.pinterest.com/'>Pinterest</a></li>
                </ul>
            </div>
        </section>
    </footer>
  )
}
