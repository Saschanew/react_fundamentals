import React from 'react';
import PropTypes from 'prop-types';

function UserName({userName}) {
    return <div className='userName'><p>{userName}</p></div>
};

UserName.propTypes = {
    userName: PropTypes.string
};

export default UserName;