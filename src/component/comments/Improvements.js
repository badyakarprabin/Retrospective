import React from 'react';
import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import InputField from '../common/InputField';
import { addImprovementRowsAction } from '../../actions/rows';

const ImprovementField = (props) => {

  return (
    <div id='improvements' className="section-container">
      <ul className="list-group list-group-flush">
        <li className="list-group-item disabled">Mention improvement things ?</li>

        <li className="list-group-item list-group-item-warning">
          <Field
            name="improvements"
            component={InputField}
          />
        </li>
        <li className="list-group-item list-group-item-warning">
          <Field
            name="improvements1"
            component={InputField}
          />
        </li>
        <li className="list-group-item list-group-item-warning">
          <Field
            name="improvements2"
            component={InputField}
          />
        </li>
      </ul>
      <div className='btn btn-warning' onClick={props.handleSubmit(props.submitResponse)} >
        Next
          </div>
    </div >
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

  withHandlers({
    submitResponse: (props) => (formData) => {
      const improvementPoints = Object.keys(formData).map(item => {
        return formData[item]
      })
      props.addImprovementRowsAction({
        isSubmitted: true,
        points: improvementPoints
      })
    }
  }),

  reduxForm({
    form: 'improvment',
    enableReinitialize: true
  })
)

export default enhance(ImprovementField);
