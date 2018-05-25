# The Q-CTRL front-end challenge

The goal of this challenge is to set up a [React](https://reactjs.org/)
application where users will be able to view a list of evaluations, create a new
evaluation and view the pulses attached to an evaluation.

To get started please fork this repository and when you're finished create a
pull request.

## Brief

The brief has been divided into three features:

1.  [List evaluations](#list-evaluations)
2.  [Create evaluation](#create-evaluation)
3.  [View evaluation](#view-evaluation)

---

### List evaluations

Implement a page which shows a list of evaluations.

#### Design

![Design for Evaluations page](doc/files/list_evaluations.png 'Evaluations Page Design')

#### Scenarios

##### Scenario 1: Show evaluations at root

    When I am on the root page
    Then I should see a list of evaluations

##### Scenario 2: Navigate to evaluation

    Given I am on the evaluations page
    When I click on an evaluation
    Then I should be on the evaluation page

#### API Endpoint

You can get a list of evaluations from the API by making a `GET` request to
`http://q-ctrl-api.appspot.com/evaluations`

---

### Create evaluation

Implement a modal to create an evaluation which is triggered from the
evaluations page.

#### Design

![Design for Create Evaluation modal](doc/files/create_evaluation.png 'Create Evaluation Modal Design')

#### Scenarios

##### Scenario 1: Show create evaluation modal

    Given I am on the evaluations page
    When I click "+"
    Then I should see the create evaluation modal

##### Scenario 2: Validate evaluation inline

    Given I am on the create evaluation modal
    When I click save
    Then I should see "Enter a title"
    And I should see "Enter maximum rabi rate"
    And I should see "Enter polar angle"

##### Scenario 3: Validate evaluation from API

    Given I am on the create evaluation modal
    And I fill in a polar angle of 10
    And I fill in a maximum rabi rate of 62.8
    When I click save
    Then I should see "Ensure that there are no more than 1 digits before the decimal point."

#### API Endpoint

You can create an evaluation in the API by making a `POST` request to
`http://q-ctrl-api.appspot.com/evaluations` with the body:

```json
{
  "data": {
    "type": "Evaluation",
    "attributes": {
      "name": "Evaluation Name",
      "maximum_rabi_rate": 62.8,
      "polar_angle": 3.14
    }
  }
}
```

You need to include the headers:

* `Content-Type`: `application/vnd.api+json`

---

### View evaluation

Implement a page which shows an evaluation and the related pulses.

The charts should be implemented using [plotly.js](https://plot.ly/javascript/).
Do not worry about the formatting of the chart, the standard formatting will be fine.

#### Design

![Design for Evaluation page](doc/files/view_evaluation.png 'Evaluation Page Design')

#### Scenarios

##### Scenario 1: Show evaluation

    Given there is an evaluation "My Evaluation"
    When I am on the "My Evaluation" evaluation page
    Then I should see "My Evaluation"

##### Scenario 2: Show evaluation pulses

    Given there is an evaluation "My Evaluation"
    And it has a related pulse of the type "Primitive"
    And it has a related pulse of the type "SK1"
    When I am on the "My Evaluation" evaluation page
    Then I should see the pulse "Primitive"
    And I should see the pulse "SK1"

#### API Endpoint

You can view an evaluation in the API by making a `GET` request to
`http://q-ctrl-api.appspot.com/evaluations/:id`.

You can include the pulses for an evaluation by appending `?include=pulses` to
your request.

#### Plot Points

To plot the Pulse you need to create three plot lines:

```
[
  {
    x: pulse.times,
    y: pulse.x_amplitudes,
    name: "X",
    type: "scatter",
  },
  {
    x: pulse.times,
    y: pulse.y_amplitudes,
    name: "Y",
    type: "scatter",
  },
  {
    x: pulse.times,
    y: pulse.z_amplitudes,
    name: "Z",
    type: "scatter",
  }
]
```

#### API Endpoint

## Additional Information

### Design

The original design files can be accessed:

* [PDF](doc/files/design.pdf)
* [Sketch](doc/files/design.sketch)

The font used is [Roboto](https://fonts.google.com/specimen/Roboto) by Google
Fonts. It is used in three different weights:

* light 300
* regular 400
* medium 500

The icons have been exported as svg:

* [logo](doc/files/logo.svg)
* [plus](doc/files/plus.svg)
* [cross](doc/files/cross.svg)
* [chevron right](doc/files/chevron_right.svg)

Colours used are:

* electric violet: `#680CEA`
* light grey: `#680CEA`
* grey: `#AE9FB4`
* dark grey: `#250D2E`
* danger: `#B03060`

### API

When there is a validation error you will get a response from the API similar to
this:

```json
{
  "errors": [
    {
      "detail":
        "Ensure that there are no more than 1 digits before the decimal point.",
      "source": {
        "pointer": "/data/attributes/polar_angle"
      },
      "status": "400"
    }
  ]
}
```
