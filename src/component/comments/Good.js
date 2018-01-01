import React from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { Element } from 'react-scroll';
import { Field, reduxForm } from 'redux-form';
import { Col, Button, Panel } from 'react-bootstrap';

import InputField from '../common/InputField';
import { addGoodRowsAction } from '../../actions/rows';

const GoodField = (props) => {

  return (
    <Element name="good" className="good">
      <Panel header='Mention good things :' bsStyle="success">
        <Col xs={10} lg={10}>
          <Field
            name="details1"
            component={InputField}
            placeholder='What need right'
          />
          <Field
            name="details2"
            component={InputField}
            placeholder='What need right'
          />
          <Field
            name="details3"
            component={InputField}
            placeholder='What need right'
          />
        </Col>
        <Col xs={2} xsOffset={10} >
          <Button bsStyle="success">
            Submit your review</Button>
        </Col>
      </Panel>
    </Element>
  )
}

const mapStateToProps = state => ({
  rows: state.data.rows
})

const mapDispatchToProps = {
  addGoodRowsAction
}

const enhance = compose(
  // withProps(() => ({
  //   initialValues: {
  //     details: 'dfdfdfdfdf',
  //   }
  // })),

  connect(mapStateToProps, mapDispatchToProps),

  reduxForm({
    form: 'addNoteForm',
    enableReinitialize: true,
  })
)

export default enhance(GoodField);