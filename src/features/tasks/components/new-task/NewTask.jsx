import React, { useState } from 'react';

import './index.scss'

export const NewTask = ({ createTask }) => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = event => setInputValue(event.target.value);

    const addTask = () => {
        if(!inputValue) return;
        createTask({ body: inputValue });
        setInputValue('')
    };

    return <div className="wrapper">
        <input type="text" placeholder="Add new todo..." value={inputValue} onChange={handleChange} className="input" />
        <button className="addBtn" onClick={addTask}>Add</button>
    </div>
}

export default NewTask;
