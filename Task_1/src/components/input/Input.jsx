import React from 'react';
import PropTypes from 'prop-types';

function Input({onChange}) {
    return <input onChange={onChange} className='input'></input>
};

Input.protoTypes = {
    onChange: PropTypes.func
};

export default Input;