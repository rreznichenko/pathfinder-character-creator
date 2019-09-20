import React, { useState } from 'react';
import BoxInput from '../../../components/BoxInput';
import BoxLabel from '../../../components/BoxLabel';

function CmSection({onChange, dex = 0, str = 0}) {
  const [cmStats, setCmStats] = useState({});

  const changedField = e => {
    const value = e.target.value;
    const name = e.target.name;
    let info = { ...cmStats };
    info[name] = value;
    setCmStats(info);
    onChange(info);
  };
  return (
    <div className="text-left my-4">
      <div>
        <BoxLabel>CMB</BoxLabel>
        <BoxInput name="cmb-all" onChange={changedField} />
        <BoxInput name="cmb-base" onChange={changedField} />
        <BoxInput name="cmb-str" value={str} onChange={changedField} />
      </div>
      <div>
        <BoxLabel>CMD</BoxLabel>
        <BoxInput name="cmd-all" onChange={changedField} />
        <BoxInput name="cmd-base" onChange={changedField} />
        <BoxInput name="cmd-str" value={str} onChange={changedField} />
        <BoxInput name="cmd-dex" value={dex} onChange={changedField} />
      </div>
    </div>
  );
}

export default CmSection;
