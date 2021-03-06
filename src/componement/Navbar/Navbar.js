import React from 'react';
import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Navbar = () => {
    const { user, logOut } = useAuth();
    return (
        <div className=' justify-content-around menu'>
          
     <h2 className='logo'>Ibne sinha hosptal</h2>
           
            <div className='all-nav'>
                <Link className='link' to='/home'>Home </Link>
                <Link className=' link' to='/services'>Services</Link>
                <Link className=' link' to='/about'>About Us</Link>
                <Link className=' link' to='/contact'>Contact Us</Link>
                
                
               
               
            {user?.email ? <button className=' sec-link'  onClick={logOut}>log out</button>:<Link className=' sec-link' to='/login'>Log in</Link>}
            <span className='text-info ps-3'>{user.displayName}
                
                </span>
                

            </div>
        </div>
    );
};

export default Navbar;