import React from 'react';
import PropTypes from 'prop-types';

function Input({children, onChange}) {
    return <input type={children} onChange={onChange} className='input'></input>
};

Input.propTypes = {
    children: PropTypes.node,
    onChange: PropTypes.func
};

export default Input;