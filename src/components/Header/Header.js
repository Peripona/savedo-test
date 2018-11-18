import React, { PureComponent } from 'react';
import './Header.css';
import logo from '../../assets/img/logo.png';

class Header extends PureComponent {
  render() {
    return (
      <header className="header">
        <img src={logo} alt="github" className="logo" />
      </header>
    );
  }
}

export default Header;
