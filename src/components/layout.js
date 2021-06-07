import React from 'react';

import Header from './Header'
import styled from 'styled-components';

const LayoutStyles = styled.div`
display: grid;
/* grid-template-columns: 1fr; */


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
