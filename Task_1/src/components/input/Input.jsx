import React from 'react';
import PropTypes from 'prop-types';

function Input({onChange}) {
    return <input onChange={onChange} className='input'></input>
};

Input.propTypes = {
    onChange: PropTypes.func
};

export default Input;