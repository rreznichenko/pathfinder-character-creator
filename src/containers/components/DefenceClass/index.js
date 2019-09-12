import React from 'react';

function DefenceClass() {
    return (
       <>
        <span>Класс Брони</span>
        <input placeholder="всего" />
        <span>=</span>
        <span>10</span>
        <span>+</span>
        <input placeholder="бонус доспеха" />
        <span>+</span>
        <input placeholder="бонус щита" />
        <span>+</span>
        <input placeholder="модификатор ловкости" />
        <input placeholder="модификатор размера" />
        <input placeholder="естественная броня" />
        <input placeholder="бонус отражения" />
        <input placeholder="прочие модификаторі" />
       </> 
    );
}

export default DefenceClass;