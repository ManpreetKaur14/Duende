import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import './Button.css'
import Dropdown from './Dropdown';
import Dropdown2 from './Dropdown2';

function Navbar() {
  const [click, setClick] = useState(false);
  const[click2,setClick2] =useState(false);
  const [navbar, setNavbar] = useState(false);

  const [dropdown, setDropdown] = useState(false);
  
  const [dropdown2, setDropdown2] = useState(false);

  const handleClick = function(){ setClick(!click); setNavbar(!navbar);}
  const handleClick2 = () => setClick2(!click2);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };
  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  const onMouseEnter2 = () => {
    if (window.innerWidth < 960) {
      setDropdown2(false);
    } else {
      setDropdown2(true);
    }
  };
  const onMouseLeave2 = () => {
    if (window.innerWidth < 960) {
      setDropdown2(false);
    } else {
      setDropdown2(false);
    }
  };

  const changeNavbar = () => {
    if(window.scrollY >= 80 ) 
    {
      setNavbar(true);
    }
    else
    {
      setNavbar(false);
    }
  };

  window.addEventListener('scroll', changeNavbar);
  return (
    <>
      <nav className={navbar ? 'navbar active' : 'navbar'}>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <img className='logo' src={require('../images/logo.png')} alt='logo' />
        </Link>
        <div className='menu-icon'>
          <i className={click ? 'fas fa-times'  : 'fas fa-bars'}  onClick={() => {
          handleClick();
          // setNavbar(true);
        }}/>

        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              About
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/contact-us'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              FAQ
            </Link>
          </li>
          <li className='nav-item side'>
            <Link
              to='/contact-us'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Whitepaper
            </Link>
          </li>
          <li className='nav-item side'>
            <Link
              to='/contact-us'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Token Contract Address
            </Link>
          </li>
          <li className='nav-item side'>
            <Link
              to='/contact-us'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Three.js
            </Link>
          </li>
          <li className='nav-item side'>
            <Link
              to='/contact-us'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Proof of Payment Stream
            </Link>
          </li>
          <li className='nav-item side'>
            <Link
              to='/contact-us'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Terms of Services
            </Link>
            <Link
              to='/contact-us'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Privacy Policy
            </Link>
          </li>
          <li
            className='nav-item hide'
  
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              className='nav-links '
              onClick={closeMobileMenu}
            >
             Duende World  <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li 
          className='nav-item hide'
          onMouseEnter={onMouseEnter2}
          onMouseLeave={onMouseLeave2}
            >
            <Link
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Legal <i className='fas fa-caret-down' />
            </Link>
            {dropdown2 && <Dropdown2 />}
          </li>
          
          <li>
            <Link
              to='/signup'
              target="_blank"
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Launch App
            </Link>
          </li>
        </ul>
        <Button />
      </nav>
    </>
  );
}

export default Navbar;
