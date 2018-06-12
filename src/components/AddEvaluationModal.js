import React, { Component } from 'react';
import Modal from 'react-modal';
import { LocalForm, Control } from 'react-redux-form';

Modal.setAppElement('#root');

class AddEvaluationModal extends Component {
  handleChange(values) {}
  handleUpdate(form) {}
  handleSubmit(values) {
    fetch('http://q-ctrl-api.appspot.com/evaluations/', {
      method: 'post',
      headers: {
        'Content-Type': 'application/vnd.api+json'
      },
      body: JSON.stringify({
        data: {
          type: 'Evaluation',
          attributes: {
            name: values.title,
            maximum_rabi_rate: values.maxRabiRate,
            polar_angle: values.polarAngle
          }
        }
      })
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }
  render() {
    return (
      <Modal
        isOpen={this.props.addEvaluation}
        contentLabel="Add Evaluation"
        closeTimeoutMS={200}
        onRequestClose={this.props.handleClose}
      >
        <button onClick={this.props.handleClose}>X</button>
        <h2>Create a new</h2>
        <h1>Evaluation</h1>
        <LocalForm
          onUpdate={(form) => this.handleUpdate(form)}
          onChange={(values) => this.handleChange(values)}
          onSubmit={(values) => this.handleSubmit(values)}
        >
          <label>Title</label>
          <Control.text model=".title" />

          <label>Maximum Rabi Rate</label>
          <Control.text type="number" model=".maxRabiRate" />

          <label>Polar Angle</label>
          <Control.text type="number" model=".polarAngle" />

          <button>create evaluation</button>
        </LocalForm>
      </Modal>
    );
  }
}

export default AddEvaluationModal;
