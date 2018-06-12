import React from 'react';

const EvaluationListItem = (props) => {
  return (
    <div
      onClick={() => {
        props.handleClick(props.id, props.title);
      }}
    >
      {props.title}|{props.type}|{props.polarAngle}|{props.maxRabi}
    </div>
  );
};

export default EvaluationListItem;
