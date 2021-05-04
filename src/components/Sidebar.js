import React from 'react';
import Img from '../images/JessImage.jpg'
import styled from 'styled-components';
import SocialLink from './SocialLink';

const SideBarStyles = styled.div`
display: grid;
border: 2px solid red;
background-color: #101010;
padding-left: 3rem;
padding-top: 3rem;
padding-bottom: 20rem;

`


const ImageStyle = styled.img`
max-width: 15rem;
`

export default function Sidebar() {

    return (
        <SideBarStyles>
            <ImageStyle src={Img}></ImageStyle>
            <SocialLink />
        </SideBarStyles>

    )

}