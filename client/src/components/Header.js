import React from 'react';
import styled from 'styled-components';

export default function Header() {

  return(
    <HeaderTop>
      <h1>Advanced React - Women's World Cup</h1>
    </HeaderTop>
  );
}

//styles

const HeaderTop = styled.div`
width: 100%;
background: white;
text-align: center;
font-family: 'Anton', sans-serif;
`;