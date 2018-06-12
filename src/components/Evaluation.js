import React, { Component } from 'react';
import Plot from 'react-plotly.js';

class Evaluation extends Component {

  render() {
    return (
      <div>
        <h1>{this.props.location.state && this.props.location.state.data.attributes.name}</h1>
        {this.props.location.state ? (
          this.props.location.state.included.map((pulse, i) => (
            <Plot
              key={i}
              data={[
                {
                  x: pulse.attributes.times,
                  y: pulse.attributes.x_amplitudes,
                  name: 'X',
                  type: 'scatter'
                },
                {
                  x: pulse.attributes.times,
                  y: pulse.attributes.y_amplitudes,
                  name: 'Y',
                  type: 'scatter'
                },
                {
                  x: pulse.attributes.times,
                  y: pulse.attributes.z_amplitudes,
                  name: 'Z',
                  type: 'scatter'
                }
              ]}
              layout={{ width: 350, height: 280, title: `${pulse.type}` }}
            />
          ))
        ) : (
          <h3>Loading Pulses</h3>
        )}
      </div>
    );
  }
}

export default Evaluation;
