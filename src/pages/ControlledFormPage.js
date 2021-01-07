import React, {useState} from 'react';

export const ControlledFormPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    return (
        <form>
            <h3> Please Enter your infornmaruib</h3>
            <div>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </div>
            <button onClick={e => {
                alert(`
                    Your Name is ${name}
                    Your email is ${email}
                `);
                e.preventDefault();
            }}>Submit</button>
        </form>
    )
}