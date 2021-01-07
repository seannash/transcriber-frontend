import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

//import { Redirect} from 'react-router-dom';

export const ProtectedPage = () => {

    const history = useHistory();
    const isAuthed = false;
    useEffect(() => {
        if (!isAuthed)
        history.push("/");
    });

    //return <Redirect to="/"></Redirect>
    return <>
    <h1>Only Auth Users should be here</h1>
    </>
    
}