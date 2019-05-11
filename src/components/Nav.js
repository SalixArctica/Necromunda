import React from 'react';
import { StickyNav, Button, Title } from './styled/styledNav';
import logo from '../logo.png';
import CollapsibleDiv from './CollapsibleDiv';

const Nav = () => {
    return (
        <StickyNav>
            <CollapsibleDiv>
                <Button>List Manager</Button>
                <Button>Armory</Button>
                <Button>Territories</Button>
            </CollapsibleDiv>
        </StickyNav>
    );
}

export default Nav;