import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby'

export default function Article(props) {
    console.log(props)
    return (
        <div>
            <h1>{props.headline}</h1>
            <img src={props.image} />
            <p>{props.firstParagraph}</p>
            <a href={props.link}>{props.link}</a>
        </div>
    )

}