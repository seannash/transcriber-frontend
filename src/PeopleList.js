import React from 'react';
import {PeopleListItem} from './PeopleListItem.js'
import styled from 'styled-components'

const Wrapper = styled.div`
    border: 2px solid rgb(206, 183, 183);
    padding: 32px;
`;

export const PeopleList = ({ people }) => {
    return <Wrapper>
            {people.map(person => (
            <PeopleListItem person={person} key={person.name}/>    
        ))}

        </Wrapper>
}