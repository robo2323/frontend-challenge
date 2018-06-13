import React, { Component } from 'react';
import Evaluations from './Evaluations';
import AddEvaluationModal from './AddEvaluationModal';
import styled, { injectGlobal } from 'styled-components';
import Container from './Container';
import Roboto from '../assets/Roboto-Regular.ttf';

injectGlobal`
@font-face{
  font-family: Roboto;
  src: url(${Roboto});
}
`;

injectGlobal`
  body {
    margin: 0;
    background: #faf7fc; 
    color: #250D2E;   
    font-family: Roboto, sans-serif;
    font-weight: 300;
  }  
`;

injectGlobal`
.overlayBg {
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background-color: #ae9fb4b0;
}
`;

const PlusDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 200px;
  div {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #680cea;
    text-align: center;
    line-height: 40px;
    vertical-align: middle;
    font-size: 30px;
    color: #faf7fc;
    margin: auto;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      transform: scale(1.1) rotateZ(90deg);
    }
  }
`;

const Context = React.createContext();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      evaluations: '',
      addEvaluation: false
    };

    this.componentDidMount = this.componentDidMount.bind(this);
    this._handleEvaluationClick = this._handleEvaluationClick.bind(this);
  }
  componentDidMount() {
    fetch('http://q-ctrl-api.appspot.com/evaluations')
      .then((res) => res.json())
      .then((data) => {
        this.setState({ evaluations: data.data });
      });
  }
  _handleEvaluationClick(id, title) {
    const url = `http://q-ctrl-api.appspot.com/evaluations/${id}?include=pulses`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        this.props.history.push({
          pathname: `/evaluations/${title}`,
          state: data
        });
      });
  }
  render() {
    return (
      <Container>
        <PlusDiv>
          <h2>Evaluations</h2>
          <div
            onClick={() => {
              this.setState({ addEvaluation: true });
            }}
          >
            +
          </div>
        </PlusDiv>
        <Evaluations _handleEvaluationClick={this._handleEvaluationClick} evaluations={this.state.evaluations} />
        <Context.Provider value={{ state: this.props.history }}>
          <AddEvaluationModal
            addEvaluation={this.state.addEvaluation}
            handleClose={() => {
              this.setState({ addEvaluation: false });
            }}
          />
        </Context.Provider>
      </Container>
    );
  }
}
export { Context };
export default App;
