import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import {
    faFacebook,
    faTwitter,
    faInstagram
} from '@fortawesome/free-brands-svg-icons';

const GridStyle = styled.div`
display:grid;
grid-template-columns: 1fr 1fr 1fr;
grid-gap: 1rem;

a.social:hover {
    transform: translateY(-2px);
}

`

export default function SocialLink() {
    return (
        <>

            <GridStyle>
                <a
                    href='https://www.facebook.com/mumstrife/'
                    className='facebook social'
                >
                    <FontAwesomeIcon icon={faFacebook} size='2x' />
                </a>
                <a
                    href='https://twitter.com/mumstrife'
                    className='twitter social'
                >
                    <FontAwesomeIcon icon={faTwitter} size='2x' />
                </a>
                <a
                    href='https://www.instagram.com/mumstrife/'
                    className='instagram social'
                >
                    <FontAwesomeIcon icon={faInstagram} size='2x' />
                </a>
            </GridStyle>
        </>
    )
}