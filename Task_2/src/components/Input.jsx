import React from 'react';
import PropTypes from 'prop-types';

function Input({children, onChange, required}) {
    return <input type={children} onChange={onChange} className='input' required={required}></input>
};

Input.propTypes = {
    children: PropTypes.node,
    onChange: PropTypes.func,
    required: PropTypes.bool
};

export default Input;