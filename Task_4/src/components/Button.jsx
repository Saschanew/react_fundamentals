import React from 'react';
import PropTypes from 'prop-types';

function Button({children, className, onClick, type}) {
    return <button type={type} className={className} onClick={onClick}>{children}</button>
};

Button.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    onClick: PropTypes.func,
    type: PropTypes.string
};

Button.defaultProps = {
    className: '',
    onClick: () => {}
}

export default Button;