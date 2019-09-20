import React, { useState } from 'react';
import BoxInput from '../../../components/BoxInput';
import BoxLabel from '../../../components/BoxLabel';
import styled from 'styled-components';

const StyledRoot = styled.div`
    width: 360px;
`;

function SavesSection(props) {
    const { onChange } = props;
    const [savesSection, setSavesSection] = useState({});

    const changedField = e => {
        const value = e.target.value;
        const name = e.target.name;
        let info = { ...savesSection };
        info[name] = value;
        setSavesSection(info);
        onChange(info);
    };

    return (
       <StyledRoot className="my-15">
           <div>
                <BoxLabel>Стойкость</BoxLabel>
                <BoxInput name="all-const" onChange={changedField} />
                <BoxInput name="mod-const" onChange={changedField} />
                <BoxInput name="mod-mage-const" onChange={changedField} />
                <BoxInput name="mod-other-const" onChange={changedField} />
            </div>
           <div>
                <BoxLabel>Реакция</BoxLabel>
                <BoxInput name="all-react" onChange={changedField} />
                <BoxInput name="mod-react" onChange={changedField} />
                <BoxInput name="mod-mage-react" onChange={changedField} />
                <BoxInput name="mod-other-react" onChange={changedField} />
            </div>
           <div>
                <BoxLabel>Воля</BoxLabel>
                <BoxInput name="all-will" onChange={changedField} />
                <BoxInput name="mod-will" onChange={changedField} />
                <BoxInput name="mod-mage-will" onChange={changedField} />
                <BoxInput name="mod-other-will" onChange={changedField} />
            </div>
       </StyledRoot> 
    );
}

export default SavesSection;