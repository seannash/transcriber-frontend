import React from 'react';

export const UncontrolledFormPage = () => {
    const nameInput = React.createRef();
    const emailInput = React.createRef();
    return (
        <form>
            <h3> Please Enter your infornmaruib</h3>
            <div>
                <input
                    ref={nameInput}
                    type="text"
                    placeholder="Name"
                />
            </div>
            <div>
                <input
                    ref={emailInput}
                    type="text"
                    placeholder="Email"
                />
            </div>
            <button onClick={e => {
                alert(`
                    Your Name is ${nameInput.current.value}
                    Your email is ${emailInput.current.value}
                `);
                e.preventDefault();
            }}>Submit</button>
        </form>
    )
}