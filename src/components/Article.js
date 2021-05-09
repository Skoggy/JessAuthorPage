import React from 'react';
import styled from 'styled-components';

export default function Article(props) {
    console.log(props)
    return (
        <div>
            <h1>{props.headline}</h1>
            {/* <img src={image} /> */}
            <p>{props.firstParagraph}</p>
            {/* <a href={link} /> */}
        </div>
    )

}