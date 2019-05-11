import React from 'react';
import styled from 'styled-components';
import { CardRow, CardTitle, CardWrapper } from './styled/CardComponents';
import WeaponCard from './WeaponCard';

const conditionallyRender = (condition, stuffToReturn) => {
    if(condition) {
        return condition;
    }
    else {
        return stuffToReturn;
    }
}

const UnitCard = props => {
    return (
        <CardWrapper>
            <CardTitle>
                <h1>{props.unit.name}</h1>
                <h2>rank: {props.unit.rank}</h2>
            </CardTitle>
            <CardRow rows='12'>
                <p>M</p><p>WS</p><p>BS</p><p>S</p><p>T</p><p>W</p><p>I</p><p>A</p><p>Ld</p><p>Cl</p><p>Will</p><p>Int</p>
            </CardRow>
            <CardRow rows='12'>
                <p>{props.unit.move + '"'}</p>
                <p>{props.unit.weaponSkill + '+'}</p>
                <p>{props.unit.ballisticSkill + '+'}</p>
                <p>{props.unit.strength}</p>
                <p>{props.unit.toughness}</p>
                <p>{props.unit.wounds}</p>
                <p>{props.unit.initiative + '+'}</p>
                <p>{props.unit.attacks}</p>
                <p>{props.unit.leadership + '+'}</p>
                <p>{props.unit.cool + '+'}</p>
                <p>{props.unit.willpower + '+'}</p>
                <p>{props.unit.intelligence + '+'}</p>
            </CardRow>
            {props.unit.weapons.map(weapon => {
                return (
                    <WeaponCard weapon={weapon}/>
                )
            })}
            <p>{props.unit.skills ? 'skills: ' + props.unit.skills.join(', ') : ''}</p>
        </CardWrapper>
    );
}

export default UnitCard;