import React from 'react';
import styled from 'styled-components';

export default function Book(props) {
    console.log(props)
    return (
        <div>
            <h1>{props.title}</h1>
            <img src={props.coverImage} />
            <p>{props.description}</p>
            <a href={props.linkToBuy}>Get from Amazon</a>
        </div>
    )
}