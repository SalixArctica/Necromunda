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
    vertical-align: center;
    margin: 0;
    padding: .5rem 0;
}
> p:nth-child(even) {background: #A9B1B6;}
`

const CardTitle = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 0;
    > div > h1 {
        margin: 0;
        display: inline;
    }
    > h2 {
        margin: 0;
        text-align: right;
        align-self: baseline;
    }
    > div > p {
        margin: 0;
        margin-left: 1rem;
        display: inline;
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