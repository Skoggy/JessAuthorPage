import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Logo from '../images/JessLogo.png'
import Img from '../images/JessImage.jpg'
import SocialLink from './SocialLink'

const ImageStyle = styled.img`
max-width: 15rem;
`

const LogoStyles = styled.img`
max-width: 10rem;
`
const NavStyles = styled.nav`
margin-bottom: 2rem;

ul {
    margin: 0;
    padding: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 2rem;
    align-items: center;
    list-style: none;
    font-size: 1.75rem;
    text-decoration: none;
    
}
`

const GridStyles = styled.div`
display:grid;
grid-template-columns: 1fr 4fr;
border: 5px solid red;
`


export default function Nav() {
    return (
        <GridStyles>
            <div>
                <LogoStyles src={Logo}></LogoStyles>
                <ImageStyle src={Img}></ImageStyle>
                <SocialLink />

            </div>

            <NavStyles>

                <ul>

                    <li>
                        <Link to='/about/'>About</Link>
                    </li>
                    <li>
                        <Link to='/'>Articles</Link>
                    </li>
                    <li>
                        <Link to='/sale/'>Shop</Link>
                    </li>
                    <li>
                        <Link to='/contact/'>Contact</Link>
                    </li>

                </ul>

            </NavStyles>
        </GridStyles>
    )
}