import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { IoMdArrowRoundBack } from 'react-icons/io';
import logoNav from '../img/proton-xpr-logo.svg';
import '../style/Navbar.css';

function Navbar({ back = false }) {
  return (
    <div>
      <nav className="Navbar">
        {back ? (
          <Link to="/React-Solo-Capstone/">
            <IoMdArrowRoundBack className="BackIcon" />
          </Link>
        ) : (
          ''
        )}
        <img src={logoNav} alt="" />
        <h1>World of Crypto</h1>
      </nav>
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
