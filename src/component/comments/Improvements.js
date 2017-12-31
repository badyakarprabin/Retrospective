import React from 'react';
import { connect } from 'react-redux';
import { Col, Button, ControlLabel } from 'react-bootstrap';

import InputField from '../common/InputField';
import { addImprovementRowsAction } from '../../actions/rows';

const ImprovementField = (props) => {
  const { improvements } = props.rows;

  return (
    < div >
      <Col lg={12} xs={12}>
        <ControlLabel>Mention good things :</ControlLabel>
      </Col>
      <Col xs={8} lg={8}>
        {
          improvements && improvements.map((item, index) => (
            <InputField key={index} placeholder="What needs more improvements ?" />
          ))
        }
      </Col>
      <Col xs={4} lg={4}>
        <Button block
          onClick={() => {
            improvements.push(1);
            props.addImprovementRowsAction(
              {
                improvements: improvements
              }
            )
          }
          }>
          Add More</Button>
      </Col>
    </div >
  )
}

const mapStateToProps = state => ({
  rows: state.data.rows
})

const mapDispatchToProps = {
  addImprovementRowsAction
}

export default (connect(mapStateToProps, mapDispatchToProps)(ImprovementField));
