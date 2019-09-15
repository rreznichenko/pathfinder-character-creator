import React  from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
& {
  background: transparent;
  border: 1px solid #222021;
  margin: 5px;
  font-family: 'Philosopher';
}

&::placeholder {
  color: #27221f;
} 

&:focus {
  outline: none;
}
width: 27px;
height: 25px;
`;

function BoxInput(props) {
  const {name, onChange, placeholder} = props;
  return  <StyledInput autoComplete="off" name={name} onChange={onChange} placeholder={placeholder} />
}

export default BoxInput;