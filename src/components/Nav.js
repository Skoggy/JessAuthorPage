import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Logo from '../images/JessLogo.png'

const LogoStyles = styled.img`
max-width: 10rem;
`


const NavStyles = styled.nav`
margin-bottom: 2rem;

ul {
    margin: 0;
    padding: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 2rem;
    align-items: center;
    list-style: none;
    font-size: 1.75rem;
    text-decoration: none;
}
`



export default function Nav() {
    return <NavStyles>
        <ul>
            <li>
                <Link to='/about/'>About</Link>
            </li>
            <li>
                <Link to='/'>Index</Link>
            </li>
            <li>
                <Link to='/sale/'>Sale</Link>
            </li>
            <LogoStyles src={Logo}></LogoStyles>
        </ul>

    </NavStyles>
}