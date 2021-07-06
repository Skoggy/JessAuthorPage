import React from 'react';

import Header from './Header'
import styled from 'styled-components';

const LayoutStyles = styled.div`
display: grid;



`


export default function Layout({ children }) {
  return (
    <>
      <Header />
      <LayoutStyles>
        {children}
      </LayoutStyles>

    </>
  );
}
