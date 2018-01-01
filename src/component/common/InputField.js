import React from 'react';
import { FormControl } from 'react-bootstrap';

/**
 * Component for <input /> field
 *
 * @param {object} props
 * @returns {JSX}
 */
function InputField(props) {
    const {
        input
  } = props;

    return (
        <FormControl
            type="text"
            {...input}
            placeholder={props.placeholder}
        />
    );
}

export default InputField;

