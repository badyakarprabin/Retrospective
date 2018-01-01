import React from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { Element } from 'react-scroll';
import { Field, reduxForm } from 'redux-form';
import { Col, Button, Panel } from 'react-bootstrap';

import InputField from '../common/InputField';
import { addImprovementRowsAction } from '../../actions/rows';

const ImprovementField = (props) => {

  return (
    <Element name="improvement" className="improvement">
      <Panel header='Mention good things :' bsStyle="primary">
        <Col xs={10} lg={10}>
          <Field
            name="improvements"
            component={InputField}
            placeholder='What need improvement'
          />
          <Field
            name="improvements1"
            component={InputField}
            placeholder='What need improvement'
          />
          <Field
            name="improvements2"
            component={InputField}
            placeholder='What need improvement'
          />
        </Col>
        <Col xs={2} xsOffset={10} >
          <Button bsStyle="info">Submit your review</Button>
        </Col>
      </Panel>
    </Element >
  )
}

const mapStateToProps = state => ({
  rows: state.data.rows
})

const mapDispatchToProps = {
  addImprovementRowsAction
}

const enhance = compose(

  connect(mapStateToProps, mapDispatchToProps),

  reduxForm({
    form: 'improvment',
    enableReinitialize: true
  })
)

export default enhance(ImprovementField);
