import React, { useState } from 'react';
import BoxInput from '../../../components/BoxInput';
import BoxLabel from '../../../components/BoxLabel';
import styled from 'styled-components';

const StyledDiv =  styled.div`
    margin: 15px;
`;
const StyledRoot = styled.div`
    text-align: right;
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
       <StyledRoot>
           <StyledDiv>
                <BoxLabel>Стойкость</BoxLabel>
                <BoxInput name="всего-стойкость" onChange={changedField} />
                <BoxInput name="модиф-хар-стойкость" onChange={changedField} />
                <BoxInput name="модиф-маг-стойкость" onChange={changedField} />
                <BoxInput name="модиф-проч-стойкость" onChange={changedField} />
            </StyledDiv>
           <StyledDiv>
                <BoxLabel>Реакция</BoxLabel>
                <BoxInput name="всего-реакция" onChange={changedField} />
                <BoxInput name="модиф-хар-реакция" onChange={changedField} />
                <BoxInput name="модиф-маг-реакция" onChange={changedField} />
                <BoxInput name="модиф-проч-реакция" onChange={changedField} />
            </StyledDiv>
           <StyledDiv>
                <BoxLabel>Воля</BoxLabel>
                <BoxInput name="всего-воля" onChange={changedField} />
                <BoxInput name="модиф-хар-воля" onChange={changedField} />
                <BoxInput name="модиф-маг-воля" onChange={changedField} />
                <BoxInput name="модиф-проч-воля" onChange={changedField} />
            </StyledDiv>
       </StyledRoot> 
    );
}

export default SavesSection;