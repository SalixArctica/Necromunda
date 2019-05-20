import React from 'react';
import styled from 'styled-components'

import { CardRow, CardTitle } from '../styled/CardComponents';

const formatNum = num => {
    if(num > 0) {
        return '+' + num;
    }
    else if(num == 0) {
        return '-';
    }
    else {
        return num;
    }
}

const WeaponCard = props => {



    return (
        <div>
            <CardTitle>
                <p>{props.weapon.name}</p>
            </CardTitle>
            <div>
                <CardRow rows="repeat(8, 1fr) 4fr">
                    <p>SR</p>
                    <p>LR</p>
                    <p>SA</p>
                    <p>LA</p>
                    <p>Str</p>
                    <p>AP</p>
                    <p>D</p>
                    <p>Ammo</p>
                    <p>Traits</p>
                </CardRow>
                <CardRow rows="repeat(8, 1fr) 4fr">
                    <p>{props.weapon.SR + '"'}</p>
                    <p>{props.weapon.LR + '"'}</p>
                    <p>{formatNum(props.weapon.SA)}</p>
                    <p>{formatNum(props.weapon.LA)}</p>
                    <p>{props.weapon.Str}</p>
                    <p>{formatNum(props.weapon.AP)}</p>
                    <p>{props.weapon.D}</p>
                    <p>{props.weapon.Ammo + '+'}</p>
                    <p>{props.weapon.Traits.join(', ')}</p>
                </CardRow>
            </div>
        </div>
    );
}

export default WeaponCard;