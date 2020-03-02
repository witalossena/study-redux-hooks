import React, { useState } from 'react';
import "./index.scss";
import Menu from './menu.svg';
import styled from 'styled-components';

const Burguer = styled.ul` 
  transition: 0.5s;
  display: none;
  @media (min-width: 0px) and (max-width: 1024px) {
    display: block;
    height: 100vh;
    width: 100%;
    background-color: #2e5266;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 4rem;
    right: 0;
    left: 0;
    justify-content: flex-start;
    align-items: center;
    transform: ${({ open }) => open ? 'translate(0)' : 'translate(-100%)'};
  }
}`;

const Header = () => {
  const [openMenu, setOpen] = useState('');
  let button
  if (openMenu === '') {
    button = <img id="img" className="img" alt="logo" src={Menu} onClick={() => setOpen('open')} />;
  } else {
    button = <img id="img" className="img" alt="logo" src={Menu} onClick={() => setOpen('')} />;
  }


  return (
    <header>
      <div className="navbar">
        <div className="navbar-brand">
          <a href="/" className="navbar-brand-link">find my dog</a>
        </div>
        {button}
        <Burguer open={openMenu}>
          <li className="nav-item">
            <a href="/" className="nav-link">inicio</a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">lost dogs</a>
          </li>


        </Burguer>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="/" className="nav-link">inicio</a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">lost dogs</a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
