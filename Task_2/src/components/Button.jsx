import React from 'react';
import PropTypes from 'prop-types';

function Button({children, className, onClick}) {
    return <button className={className} onClick={onClick}>{children}</button>
};

Button.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    onClick: PropTypes.func
};

Button.defaultProps = {
    children: 'Default Button',
    className: '',
    onClick: () => {}
}

export default Button;