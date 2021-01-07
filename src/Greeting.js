import React from 'react';
/*
export function Greeting() {
    let isMorning = (new Date()).getHours()<12;
    return isMorning
        ? <><h3>Good Morning!</h3>Later</>
        : <><h3>Good Afternoon</h3>NOW</>;
    
}
*/
/*
export const Greeting = (props) => {
    const {name}= propgs; // Destructure all propertites
    let isMorning = (new Date()).getHours()<12;
    return isMorning
        ? <><h3>Good Morning, name!</h3>Later</>
        : <><h3>Good Afternoon, name</h3>NOW</>;
    
}
*/
export const Greeting = ({name}) => {
    let isMorning = (new Date()).getHours()<12;
    return isMorning
        ? <><h3>Good Morning, name!</h3>Later</>
        : <><h3>Good Afternoon, name</h3>NOW</>;
    
}

//export default Greeting;