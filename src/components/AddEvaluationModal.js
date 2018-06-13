import React, { Component } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import { LocalForm, Control } from 'react-redux-form';
import { Context } from './App';
import cross from '../assets/cross.svg';

Modal.setAppElement('#root');

const StyledModal = styled(Modal)`
  width: 400px;
  height: 350px;
  padding: 20px;
  margin: 12.5% auto;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 2px;
  font-family: Roboto, sans-serif;
  font-weight: 300;
  h1,
  h2 {
    text-transform: uppercase;
  }
  label {
    font-size: 10px;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
  a {
    display: flex;
    width: 100%;
    height: 20px;
    justify-content: flex-end;
    cursor: pointer;
    img {
      height: 18px;
    }
  }
  span {
    display: flex;
    justify-content: space-between;
  }
  div {
    display: flex;
    flex-direction: column;
    margin: 10px auto;
  }
  .numberInputs {
    display: flex;
  }
  input {
    height: 28px;
    font-size: 18px;
  }
  input[type='number'] {
    width: 140px;
  }
  button {
    background: #680cea;
    border: none;
    padding: 10px;
    border-radius: 2px;
    color: #fff;
    cursor: pointer;
    text-transform: uppercase;
  }
`;

class AddEvaluationModal extends Component {
  handleSubmit(values, history) {
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
    }).then((res) => {
      if (res.status === 200) {
        res.json().then((data) => {
          history.push({
            pathname: `/evaluations/${data.attributes.name}`,
            state: data
          });
        });
      } else {
        this.props.handleClose();
        history.push({
          pathname: '/'
        });
      }
    });
  }
  render() {
    return (
      <Context.Consumer>
        {({ state }) => (
          <StyledModal
            isOpen={this.props.addEvaluation}
            contentLabel="Add Evaluation"
            closeTimeoutMS={100}
            onRequestClose={this.props.handleClose}
            overlayClassName="overlayBg"
          >
            <a onClick={this.props.handleClose}>
              <img src={cross} alt="close modal" />
            </a>
            <h2>Create a new</h2>
            <h1>Evaluation</h1>
            <LocalForm
              onSubmit={(values) => {
                this.handleSubmit(values, state);
              }}
            >
              <div>
                <label>Title</label>
                <Control.text model=".title" />
              </div>

              <span>
                <div>
                  <label>Maximum Rabi Rate</label>
                  <Control.text type="number" model=".maxRabiRate" />
                </div>

                <div>
                  <label>Polar Angle</label>
                  <Control.text type="number" model=".polarAngle" />
                </div>
              </span>

              <div>
                <button>create evaluation</button>
              </div>
            </LocalForm>
          </StyledModal>
        )}
      </Context.Consumer>
    );
  }
}

export default AddEvaluationModal;
