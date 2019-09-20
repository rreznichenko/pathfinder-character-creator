import React  from 'react';
import styled from 'styled-components';

const StyledBox = styled.span`
    background-color: #222021;
    color: white;
    margin:3px;
    width: 85px;
`;

function BoxLabel(props) {
  return  <StyledBox className="inline-block text-center">{props.children}</StyledBox>
}

export default BoxLabel;