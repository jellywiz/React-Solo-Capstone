import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import BackIcon from '../img/backimg.jpg';
import logoNav from '../img/proton-xpr-logo.svg';
import '../style/Navbar.css';

function Navbar({ back = false }) {
  return (
    <div>
      <nav className="">
        {back ? (
          <Link to="/React-Solo-Capstone/" className="NavBar__Back">
            <img src={BackIcon} alt="" />
          </Link>
        ) : (
          ''
        )}
      </nav>
      <div className="Navbar-header">
        <h1>Crypto</h1>
        <img src={logoNav} alt="" />
        <h1>World!</h1>
      </div>
    </div>
  );
}

export default Navbar;

Navbar.defaultProps = {
  back: false,
};

Navbar.propTypes = {
  back: PropTypes.bool,
};
