import React, { Component } from 'react';

import { Col, FormControl, ControlLabel, Button } from 'react-bootstrap';

const InputField = (props) => (
  <FormControl
    type="text"
    placeholder={props.placeholder}
  />
)

const AddImprovementField = (props) => (
  < div >
    <Col lg={12} xs={12}>
      <ControlLabel>Mention good things :</ControlLabel>
    </Col>
    <Col xs={8} lg={8}>
      {
        props.type && props.type.map((item, index) => (
          <InputField key={index} placeholder="What needs more improvements ?" />
        ))
      }
    </Col>
    <Col xs={4} lg={4}>
      <Button block onClick={() => props.addRows(2)}>Add More</Button>
    </Col>
  </div >
)

const AddGoodField = (props) => (
  < div >
    <Col lg={12} xs={12}>
      <ControlLabel>Mention good things :</ControlLabel>
    </Col>
    <Col xs={8} lg={8}>
      {
        props.type && props.type.map((item, index) => (
          <InputField key={index} placeholder='What need right' />
        ))
      }
    </Col>
    <Col xs={4} lg={4}>
      <Button block onClick={() => props.addRows(1)} > Add More</Button>
    </Col>
  </div >
)

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { rows: { good: [1], improvements: [1] } }
  }

  addRows = (type) => {
    switch (type) {
      case 1:
        this.state.rows.good.push(1);
        this.setState({
          rows: {
            ...this.state.rows,
            good: this.state.rows.good
          }
        });
        break;
      case 2:
        this.state.rows.improvements.push(1);
        this.setState({
          rows: {
            ...this.state.rows,
            improvement: this.state.rows.improvements
          }
        });
        break;
      default:
        break;
    }
  }

  render() {
    const { good, improvements } = this.state.rows;

    return (
      <div className='container'>
        <AddGoodField addRows={this.addRows} type={good} />

        <AddImprovementField addRows={this.addRows} type={improvements} />
      </div >
    );
  }
}

export default App;
