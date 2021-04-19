import React from 'react';
import PropTypes from 'prop-types';

function Button({name, className, disabled, active, onClick}) {
    return <button className={className} disabled={disabled} active={active} onClick={onClick}>{name}</button>
};

Button.protoTypes = {
    name: PropTypes.string,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    active: PropTypes.bool,
    onClick: PropTypes.func
};

Button.defaultProps = {
    name: 'Default Button',
    className: '',
    disabled: false,
    active: false,
    onClick: () => {}
}

export default Button;