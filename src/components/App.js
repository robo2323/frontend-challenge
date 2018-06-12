import React, { Component } from 'react';
import Evaluations from './Evaluations';
import AddEvaluationModal from './AddEvaluationModal';

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
      <div className="App">
        <button
          onClick={() => {
            this.setState({ addEvaluation: true });
          }}
        >
          X
        </button>
        <Evaluations _handleEvaluationClick={this._handleEvaluationClick} evaluations={this.state.evaluations} />
        <AddEvaluationModal
          addEvaluation={this.state.addEvaluation}
          handleClose={() => {
            this.setState({ addEvaluation: false });
          }}
        />
      </div>
    );
  }
}

export default App;
