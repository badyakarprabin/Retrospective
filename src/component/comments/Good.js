import React from 'react';
import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import InputField from '../common/InputField';
import { addGoodRowsAction } from '../../actions/rows';

const GoodField = (props) => {

  return (
    <div id="good" className="section-container">
      <ul className="list-group list-group-flush">
        <li className="list-group-item disabled">Mention good things?</li>

        <li className="list-group-item list-group-item-secondary ">
          <Field
            name="good"
            component={InputField}
          />
        </li>
        <li className="list-group-item list-group-item-secondary">
          <Field
            name="good1"
            component={InputField}
          />
        </li>
        <li className="list-group-item list-group-item-secondary">
          <Field
            name="good2"
            component={InputField}
          />
        </li>
      </ul>
      <div className='btn btn-secondary' onClick={props.handleSubmit(props.submitResponse)} >
        Next
          </div>
    </div >
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

  withHandlers({

    submitResponse: (props) => (formData) => {
      const goodPoints = Object.keys(formData).map(item => {
        return formData[item]
      })
      props.addGoodRowsAction({
        isSubmitted: true,
        points: goodPoints
      })
    }
  }),

  reduxForm({
    form: 'addNoteForm',
    enableReinitialize: true,
  })
)

export default enhance(GoodField);