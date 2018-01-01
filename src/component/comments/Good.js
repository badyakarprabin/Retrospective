import React from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { Element, Link } from 'react-scroll';
import { Field, reduxForm } from 'redux-form';
import { Col, Button, Panel, ListGroup, ListGroupItem, ButtonGroup, ButtonToolbar, Glyphicon } from 'react-bootstrap';

import InputField from '../common/InputField';
import { addGoodRowsAction } from '../../actions/rows';

const GoodField = (props) => {

  return (
    <Element name="good" className="good">
      <Panel header='Mention good things :' bsStyle="success">
        <ListGroup fill>
          <ListGroupItem>
            <Field
              name="good"
              component={InputField}
              placeholder='Mentions good things'
            />
          </ListGroupItem>
          <ListGroupItem>
            <Field
              name="good1"
              component={InputField}
              placeholder='Mentions good things'
            />
          </ListGroupItem>
          <ListGroupItem>
            <Field
              name="good2"
              component={InputField}
              placeholder='Mentions good things'
            />
          </ListGroupItem>
        </ListGroup>
        <Col xs={2} xsOffset={10} >
          <Button bsStyle="success">Submit your review</Button>
        </Col>
      </Panel>
      <Col xs={1} xsOffset={11} >
        <ButtonToolbar>
          <ButtonGroup>
            <Button>
              <Link activeClass="active" to="improvement" spy={true} smooth={true} offset={-100} duration={500}>
                Next <Glyphicon glyph="arrow-right" />
              </Link>
            </Button>
          </ButtonGroup>
        </ButtonToolbar>
      </Col>
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

  connect(mapStateToProps, mapDispatchToProps),

  reduxForm({
    form: 'addNoteForm',
    enableReinitialize: true,
  })
)

export default enhance(GoodField);