import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import BackIcon from '../img/backimg.jpg';

function Navbar({ back = false }) {
  return (
    <nav className="">
      {back ? (
        <Link to="/React-Solo-Capstone/" className="NavBar__Back">
          <img src={BackIcon} alt="" />
        </Link>
      ) : (
        ''
      )}
    </nav>
  );
}

export default Navbar;

Navbar.defaultProps = {
  back: false,
};

Navbar.propTypes = {
  back: PropTypes.bool,
};
