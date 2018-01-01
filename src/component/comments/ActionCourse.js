import React from 'react';
import { connect } from 'react-redux';
import { Element } from 'react-scroll';
import { Field, reduxForm } from 'redux-form';
import { compose, withHandlers } from 'recompose';
import { Col, Button, Panel, ListGroup, ListGroupItem } from 'react-bootstrap';

import InputField from '../common/InputField';
import { addCourseRowsAction } from '../../actions/rows';

const ActionField = (props) => {

    return (
        <Element name="course" className="good">
            <Panel header='Mention course of action:' bsStyle="warning">
                <ListGroup fill>
                    <ListGroupItem>
                        <Field
                            name="good"
                            component={InputField}
                            placeholder='Course of ACtions'
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <Field
                            name="good1"
                            component={InputField}
                            placeholder='Course of ACtions'
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <Field
                            name="good2"
                            component={InputField}
                            placeholder='Course of ACtions'
                        />
                    </ListGroupItem>
                </ListGroup>
                <Col xs={2} xsOffset={10} >
                    <Button bsStyle="warning" onClick={props.handleSubmit(props.submitResponse)} >
                        Submit your review
          </Button>
                </Col>
            </Panel>
        </Element >
    )
}

const mapStateToProps = state => ({
    rows: state.data.rows
})

const mapDispatchToProps = {
    addCourseRowsAction
}

const enhance = compose(

    connect(mapStateToProps, mapDispatchToProps),

    withHandlers({

        submitResponse: (props) => (formData) => {
            const actionPoints = Object.keys(formData).map(item => {
                return formData[item]
            })
            props.addCourseRowsAction({
                isSubmitted: true,
                points: actionPoints
            })
        }
    }),

    reduxForm({
        form: 'addActionForm',
        enableReinitialize: true,
    })
)

export default enhance(ActionField);