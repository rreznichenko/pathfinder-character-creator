import React, { useState } from 'react';
import BoxInput from '../../../components/BoxInput';
import BoxLabel from '../../../components/BoxLabel';

function BaseStats(props) {
  const { onChange } = props;
  const [basicStats, setBasicStats] = useState({});

  const changedField = e => {
    const value = e.target.value;
    const name = e.target.name;
    let info = { ...basicStats };
    info[name] = value;
    setBasicStats(info);
    onChange(info);
  };
  return (
    <div className="my-4">
      <div>
        <BoxLabel>СИЛ</BoxLabel>
        <BoxInput name="value-str" onChange={changedField} />
        <BoxInput name="modifier-str" onChange={changedField} />
      </div>
      <div>
        <BoxLabel>ЛВК</BoxLabel>
        <BoxInput name="value-dex" onChange={changedField} />
        <BoxInput name="modifier-dex" onChange={changedField} />
      </div>
      <div>
        <BoxLabel>ВЫН</BoxLabel>
        <BoxInput name="value-const" onChange={changedField} />
        <BoxInput name="modifier-const" onChange={changedField} />
      </div>
      <div>
        <BoxLabel>ИНТ</BoxLabel>
        <BoxInput name="value-int" onChange={changedField} />
        <BoxInput name="modifier-int" onChange={changedField} />
      </div>
      <div>
        <BoxLabel>МДР</BoxLabel>
        <BoxInput name="value-wis" onChange={changedField} />
        <BoxInput name="modifier-wis" onChange={changedField} />
      </div>
      <div>
        <BoxLabel>ХАР</BoxLabel>
        <BoxInput name="value-char" onChange={changedField} />
        <BoxInput name="modifier-char" onChange={changedField} />
      </div>
    </div>
  );
}

export default BaseStats;
