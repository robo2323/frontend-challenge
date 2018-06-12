import React from 'react';
import EvaluationListItem from './EvaluationListItem';

const Evaluations = (props) => (
  <div>
    <div>
      <h2>Title</h2>
      <h2>Type</h2>
      <h2>Polar Angle</h2>
      <h2>Max Rabi Rate</h2>
    </div>
    {props.evaluations ? (
      props.evaluations.map((evaluation, i) => (
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
      ))
    ) : (
      <h3>Loading Evaluations</h3>
    )}
  </div>
);

export default Evaluations;
