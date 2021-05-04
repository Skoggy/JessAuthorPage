import React from 'react';
import SideBar from './Sidebar';
import Header from './Header'
import styled from 'styled-components';

const LayoutStyles = styled.div`
display: grid;
grid-template-columns: 1fr 4fr;


`


export default function Layout({ children }) {
  return (
    <>
      <Header />
      <LayoutStyles>
        <SideBar />
        {children}
      </LayoutStyles>

    </>
  );
}
