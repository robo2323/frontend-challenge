import React, { Component } from 'react';
import Plot from 'react-plotly.js';
import Container from './Container';
import styled from 'styled-components';

const StyledPlot = styled(Plot)`
  margin: 10px 20px;
`;
const StyledDiv = styled.div`
  position: fixed;
  top: 60px;
  width: 100%;
  background: #faf7fc;
  border-top: 1px solid #ae9fb4;
  border-bottom: 1px solid #ae9fb4;
  box-shadow: 0 0 4px 0 #000000a8;
  z-index: 999;
  p {
    margin: 4px 0 2px 5px;
    line-height: 26px;
    vertical-align: middle;
    &:before {
      content: '1-Qubit /';
    }
  }
`;
class Evaluation extends Component {
  render() {
    return (
      <div>
        <StyledDiv>
          <p>&nbsp;{this.props.location.state && this.props.location.state.data.attributes.name}</p>
        </StyledDiv>

        <Container row width="85%">
          {this.props.location.state ? (
            this.props.location.state.included.map((pulse, i) => (
              <StyledPlot
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
            <h3>Loading Pulses...</h3>
          )}
        </Container>
      </div>
    );
  }
}

export default Evaluation;
