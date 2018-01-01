import React from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { Element } from 'react-scroll';
import { Field, reduxForm } from 'redux-form';
import { Col, Button, Panel, ListGroup, ListGroupItem } from 'react-bootstrap';

import InputField from '../common/InputField';
import { addImprovementRowsAction } from '../../actions/rows';

const ImprovementField = (props) => {

  return (
    <Element name="improvement" className="improvement">
      <Panel header='Mention good things :' bsStyle="primary">
        <ListGroup fill>
          <ListGroupItem>
            <Field
              name="improvements"
              component={InputField}
              placeholder='What need improvement'
            />
          </ListGroupItem>
          <ListGroupItem>
            <Field
              name="improvements"
              component={InputField}
              placeholder='What need improvement'
            />
          </ListGroupItem>
          <ListGroupItem>
            <Field
              name="improvements2"
              component={InputField}
              placeholder='What need improvement'
            />
          </ListGroupItem>
        </ListGroup>
        <Col xs={2} xsOffset={10} >
          <Button bsStyle="info" onClick={() => props.addImprovementRowsAction({ isSubmitted: true })}>Submit your review</Button>
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
