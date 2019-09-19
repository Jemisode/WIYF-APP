import React from 'react';

const Ingredients = ({ method }) => (
    <ul>
        { method.split("#").map((step, index) => (
            step !== "" ? <li key={ index }>{ step }</li> : null
        ))}
    </ul>
);
export default Ingredients;