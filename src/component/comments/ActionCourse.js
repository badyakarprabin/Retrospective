import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { compose, withHandlers } from 'recompose';
import { Col, Button, Panel, ListGroup, ListGroupItem } from 'react-bootstrap';

import InputField from '../common/InputField';
import { addCourseRowsAction } from '../../actions/rows';

const ActionField = (props) => (
    <div id="course" className="section-container">
        <ul className="list-group list-group-flush">
            <li className="list-group-item disabled">Mention course things?</li>
            <li className="list-group-item list-group-item-primary">
                <Field
                    name="course"
                    component={InputField}
                />
            </li>
            <li className="list-group-item list-group-item-primary">
                <Field
                    name="course1"
                    component={InputField}
                />
            </li>
            <li className="list-group-item list-group-item-primary">
                <Field
                    name="course2"
                    component={InputField}
                />
            </li>
        </ul>
        <div className='btn btn-primary' onClick={props.handleSubmit(props.submitResponse)} >
            Submit your review
            </div>
    </div >
);

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