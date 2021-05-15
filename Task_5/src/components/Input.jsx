import React from 'react';
import PropTypes from 'prop-types';

function Input({children, onChange, required, name}) {
    return <input type={children} onChange={onChange} className='input' required={required} name={name}></input>
};

Input.propTypes = {
    children: PropTypes.node,
    onChange: PropTypes.func,
    required: PropTypes.bool,
    name: PropTypes.string
};

export default Input;