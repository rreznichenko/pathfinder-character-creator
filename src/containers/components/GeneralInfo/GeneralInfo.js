import React, {useState} from 'react';
import UnderlineInput from '../../../components/UnderlineInput';

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
        <div>
            <UnderlineInput name="name" onChange={changedField} placeholder="имя" />
            <UnderlineInput name="worldview" onChange={changedField} placeholder="мировозрение" />
            <UnderlineInput name="playerName" onChange={changedField} placeholder="игрок" />
            <UnderlineInput name="level" onChange={changedField} placeholder="уровень" />
            <UnderlineInput name="god" onChange={changedField} placeholder="божество" />
            <UnderlineInput name="homeland" onChange={changedField} placeholder="родина" />
            <UnderlineInput name="race" onChange={changedField} placeholder="народ" />
            <UnderlineInput name="size" onChange={changedField} placeholder="размер" />
            <UnderlineInput name="sex" onChange={changedField} placeholder="пол" />
            <UnderlineInput name="age" onChange={changedField} placeholder="возраст" />
            <UnderlineInput name="height" onChange={changedField} placeholder="рост" />
            <UnderlineInput name="weight" onChange={changedField} placeholder="вес" />
            <UnderlineInput name="hair" onChange={changedField} placeholder="волосы" />
            <UnderlineInput name="eyes" onChange={changedField} placeholder="глаза" />
        </div>
    );
}

export default GeneralInfo;