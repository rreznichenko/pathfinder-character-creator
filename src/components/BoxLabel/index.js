import React  from 'react';
import styled from 'styled-components';

const StyledBox = styled.span`
    background-color: #222021;
    color: white;
    padding: 5px;
    margin:3px;
`;

function BoxLabel(props) {
  return  <StyledBox>{props.children}</StyledBox>
}

export default BoxLabel;