import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FaBlog } from 'react-icons/fa';

import history from '../utils/history';
import { signOutStartAction } from '../redux/user/userActions';
import { selectCurrentUser } from '../redux/user/userSelectors';
import '../styles/Navbar.scss';

const Navbar = ({ currentUser, signOutStartDispatch }) => (
  <nav className="navbar container">
    <div className="navbar__logo">
      <FaBlog className="blog-icon" color="white" size="30px" />
    </div>

    <div className="navbar__nav">
      <ul className="navbar__menu">
        <li className="navbar__item">
          <a href="/" className="navbar__link">
            Home
          </a>
        </li>
        <li className="navbar__item">
          <a href="/add-post" className="navbar__link">
            Create a Blog
          </a>
        </li>
      </ul>
    </div>

    <div className="navbar__buttons">
      {currentUser ? (
        <button
          type="button"
          className="login__button btn"
          id="login-btn"
          onClick={() => signOutStartDispatch()}
        >
          SignOut
        </button>
      ) : (
        <button
          type="button"
          className="login__button btn"
          id="login-btn"
          onClick={() => history.push('/sign-in')}
        >
          SignIn
        </button>
      )}
    </div>
  </nav>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStartDispatch: (data) => dispatch(signOutStartAction(data)),
});

Navbar.propTypes = {
  currentUser: PropTypes.string.isRequired,
  signOutStartDispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
