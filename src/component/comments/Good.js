import React from 'react';
import { connect } from 'react-redux';
import { Col, Button, ControlLabel } from 'react-bootstrap';

import InputField from '../common/InputField';
import { addGoodRowsAction } from '../../actions/rows';

const GoodField = (props) => {
  const { good } = props.rows;

  return (
    < div >
      <Col lg={12} xs={12}>
        <ControlLabel>Mention good things :</ControlLabel>
      </Col>
      <Col xs={8} lg={8}>
        {
          good && good.map((item, index) => (
            <InputField key={index} placeholder='What need right' />
          ))
        }
      </Col>
      <Col xs={4} lg={4}>
        <Button block
          onClick={() => {
            good.push(1);
            props.addGoodRowsAction(
              {
                good: good
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
  addGoodRowsAction
}

export default (connect(mapStateToProps, mapDispatchToProps)(GoodField));