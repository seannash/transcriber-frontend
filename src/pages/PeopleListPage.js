import React from 'react';
import { PeopleList } from '../PeopleList.js'

const people = [{
    name: 'John',
    age: 40
  }, {
    name: 'Sam',
    age: 20
  }
  ]

export const PeopleListPage = () => (
    <>
        <PeopleList people={people} />
    </>
)