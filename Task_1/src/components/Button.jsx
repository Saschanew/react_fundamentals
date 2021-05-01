import React from 'react';
import PropTypes from 'prop-types';

function Button({children, className, disabled, active, onClick}) {
    return <button className={className} disabled={disabled} active={active} onClick={onClick}>{children}</button>
};

Button.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    active: PropTypes.bool,
    onClick: PropTypes.func
};

Button.defaultProps = {
    children: 'Default Button',
    className: '',
    disabled: false,
    active: false,
    onClick: () => {}
}

export default Button;