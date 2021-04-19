import React from 'react';
import PropTypes from 'prop-types';

function Input({id, onChange}) {
    return <input id={id} onChange={onChange} className='input'></input>
};

Input.protoTypes = {
    id: PropTypes.string,
    onChange: PropTypes.func
};

export default Input;