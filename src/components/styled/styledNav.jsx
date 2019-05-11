import styled from 'styled-components';

const Title = styled.h1`
    text-align: center;
    width: 100%;
    color: #E46220;
    background: #292C32;
    margin: 0;
    height: 100%;
    padding-top: 1rem;
    padding-bottom: 1rem;
`

const Button = styled.button`
    background: #292C32;
    color: #E46220;
    font-size: 1rem;
    font-family: 'gugi';
    width: 100%;
    border: none;
    border-top: solid 1px #A9B1B6;
    padding: .5rem 0;
`
const StickyNav = styled.nav`
    position: sticky;
    top: 0;
`

const CollapsibleDiv = styled.div`
    height: ${props => props.collapsed ? "0%" : "100%"};
`

export { Button, Title, StickyNav };
