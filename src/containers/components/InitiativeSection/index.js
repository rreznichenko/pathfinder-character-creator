import React from 'react';

function HealthSection() {
    return (
       <>
        <span>Инициатива</span>
        <input placeholder="всего" />
        <span>=</span>
        <input placeholder="модификатор лвк." />
        <span>+</span>
        <input placeholder="модификаторы" />
       </> 
    );
}

export default HealthSection;