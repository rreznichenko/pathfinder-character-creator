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
    <div>
      <div>
        <BoxLabel>СИЛ</BoxLabel>
        <BoxInput name="значение-сил" onChange={changedField} />
        <BoxInput name="модификатор-сил" onChange={changedField} />
      </div>
      <div>
        <BoxLabel>ЛВК</BoxLabel>
        <BoxInput name="значение-лвк" onChange={changedField} />
        <BoxInput name="модификатор-лвк" onChange={changedField} />
      </div>
      <div>
        <BoxLabel>ВЫН</BoxLabel>
        <BoxInput name="значение-вын" onChange={changedField} />
        <BoxInput name="модификатор-вын" onChange={changedField} />
      </div>
      <div>
        <BoxLabel>ИНТ</BoxLabel>
        <BoxInput name="значение-инт" onChange={changedField} />
        <BoxInput name="модификатор-инт" onChange={changedField} />
      </div>
      <div>
        <BoxLabel>МДР</BoxLabel>
        <BoxInput name="значение-мдр" onChange={changedField} />
        <BoxInput name="модификатор-мдр" onChange={changedField} />
      </div>
      <div>
        <BoxLabel>ХАР</BoxLabel>
        <BoxInput name="значение-хар" onChange={changedField} />
        <BoxInput name="модификатор-хар" onChange={changedField} />
      </div>
    </div>
  );
}

export default BaseStats;
