import React, {useState} from 'react';

function GeneralInfo(props) {
const { onChange } = props;    
const [generalInfo, setGeneralInfo] = useState({});

const changedField = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    let info = { ...generalInfo };
    info[name] = value;
    setGeneralInfo(info);
    onChange(info)
}
    return (
        <>
            <div className="row">
                <input autoComplete="off" name="name" onChange={changedField} placeholder="имя" />
                <input autoComplete="off" name="worldview" onChange={changedField} placeholder="мировозрение" />
                <input autoComplete="off" name="playerName" onChange={changedField} placeholder="игрок" />
            </div>
            <div className="row">
                <input autoComplete="off" name="level" onChange={changedField} placeholder="уровень" />
                <input autoComplete="off" name="god" onChange={changedField} placeholder="божество" />
                <input autoComplete="off" name="homeland" onChange={changedField} placeholder="родина" />
            </div>
            <div className="row">
                <input autoComplete="off" name="race" onChange={changedField} placeholder="народ" />
                <input autoComplete="off" name="size" onChange={changedField} placeholder="размер" />
                <input autoComplete="off" name="sex" onChange={changedField} placeholder="пол" />
                <input autoComplete="off" name="age" onChange={changedField} placeholder="возраст" />
                <input autoComplete="off" name="height" onChange={changedField} placeholder="рост" />
                <input autoComplete="off" name="weight" onChange={changedField} placeholder="вес" />
                <input autoComplete="off" name="hair" onChange={changedField} placeholder="волосы" />
                <input autoComplete="off" name="eyes" onChange={changedField} placeholder="глаза" />
            </div>
        </>
    );
}

export default GeneralInfo;