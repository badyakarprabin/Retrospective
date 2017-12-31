import React from 'react';
import { FormControl } from 'react-bootstrap';

const InputField = (props) => (
    <FormControl
        type="text"
        placeholder={props.placeholder}
    />
)

export default InputField;