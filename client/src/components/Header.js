import React from 'react';
import styled from 'styled-components';
import './styles.css'

import {useDarkMode} from "../hooks/useDarkMode"

const Header = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
    console.log(darkMode)
  };
  
  return (
    <HeaderTop>
      <h1>Advanced React - Women's World Cup</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        ><p>Dark</p></div>
      </div>
    </HeaderTop>
  );
};

export default Header;

//styles

const HeaderTop = styled.div`
width: 100%;
background: black;
color: white;
text-align: center;
font-family: 'Anton', sans-serif;
`;