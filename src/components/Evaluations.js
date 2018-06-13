import React from 'react';
import EvaluationListItem from './EvaluationListItem';
import styled from 'styled-components';

const StyledTable = styled.table`
  border-collapse: collapse;
`;

const StyledTh = styled.th`
  width: 20%;
  padding: 30px;
  text-align: left;
  color: #ae9fb4;
  border-top: 2px solid #ae9fb4;
  border-bottom: 3px solid #ae9fb4;
`;

const Evaluations = (props) => (
  <div>
    {props.evaluations ? (
      <StyledTable>
        <thead>
          <tr>
            <StyledTh>Title</StyledTh>
            <StyledTh>Type</StyledTh>
            <StyledTh>Polar Angle</StyledTh>
            <StyledTh>Max Rabi Rate</StyledTh>
            <StyledTh />
          </tr>
        </thead>
        <tbody>
          {props.evaluations.map((evaluation, i) => (
            <EvaluationListItem
              handleClick={props._handleEvaluationClick}
              index={i}
              key={evaluation.id}
              id={evaluation.id}
              title={evaluation.attributes.name}
              type={evaluation.type}
              polarAngle={evaluation.attributes.polar_angle}
              maxRabi={evaluation.attributes.maximum_rabi_rate}
            />
          ))}
        </tbody>
      </StyledTable>
    ) : (
      <h3>Loading Evaluations...</h3>
    )}
  </div>
);

export default Evaluations;
