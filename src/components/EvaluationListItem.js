import React from 'react';
import right from '../assets/chevron_right.svg';
import styled from 'styled-components';

const StyledTd = styled.td`
  width: 20%;
  padding: 30px;
  text-align: ${(props) => (props.right ? 'right' : 'left')};
  color: #250d2e;
  span {
    background: #32cd32;
    color: #fff;
    padding: 3px 15px;
    border-radius: 2px;
  }
`;
const StyledTr = styled.tr`
  background: #fff;
  border-top: 3px solid #faf7fc;
  border-bottom: 3px solid #faf7fc;
  cursor: pointer;
  transition: all 0.25s ease;
  &:hover {
    background: #ae9fb4;
  }
`;

const EvaluationListItem = (props) => {
  return (
    <StyledTr
      onClick={() => {
        props.handleClick(props.id, props.title);
      }}
    >
      <StyledTd>{props.title}</StyledTd>
      <StyledTd>
        <span>{props.type}</span>
      </StyledTd>
      <StyledTd>{props.polarAngle}</StyledTd>
      <StyledTd>{props.maxRabi}</StyledTd>
      <StyledTd right>
        <img src={right} alt="show evaluation" />
      </StyledTd>
    </StyledTr>
  );
};

export default EvaluationListItem;
