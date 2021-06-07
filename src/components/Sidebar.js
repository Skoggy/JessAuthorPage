import React from 'react';

import styled from 'styled-components';
import SocialLink from './SocialLink';

const SideBarStyles = styled.div`
display: grid;
/* border: 2px solid red; */
background-color: white;
padding-left: 3rem;
padding-top: 3rem;
padding-bottom: 20rem;

`

export default function Sidebar() {

    return (
        <SideBarStyles>
            <SocialLink />
        </SideBarStyles>

    )

}