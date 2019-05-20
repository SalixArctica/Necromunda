import React from 'react';
import styled from 'styled-components';

const CardRow = styled.div`
display: grid;
/*if props.rows is a num make that number of rows otherwise return props.rows (for overriding this css)*/
grid-template-columns: ${props => (isNaN(props.rows) ? props.rows : `repeat(${props.rows}, 1fr)`)};
border: 1px solid black;
> p {
    font-size: .6rem;
    text-align: center;
    align-self: center;
    margin: 0;
    padding: .5rem 0;
}
> p:nth-child(even) {background: #A9B1B6;}
`

const CardTitle = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 0;
    > h1 {
        margin: 0;
    }
    > h2 {
        margin: 0;
        vertical-align: baseline;
        text-align: right;
    }
    >p {
        margin: 0;
    }
`

const CardWrapper = styled.div`
    margin: .5rem;
    padding: .5rem;
    border-radius: 5px;
    border: 1px solid black;
    background: white;
`


export { CardRow, CardTitle, CardWrapper };