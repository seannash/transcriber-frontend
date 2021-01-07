import React from 'react'
import {CounterButton } from '../CounterButton.js'
import {useParams} from 'react-router-dom'

export const CounterButtonPage = () => {
    const {name} = useParams();
    return (
    <>
        <h1>{name}</h1>
        <CounterButton/>
    </>
    )
}