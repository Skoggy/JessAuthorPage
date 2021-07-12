import React from 'react';
import styled from 'styled-components';

export default function Book(props) {

    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <a href={props.linkToBuy}>Get from Amazon</a>
        </div>
    )
}