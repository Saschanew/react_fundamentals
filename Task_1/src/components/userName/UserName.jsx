import React from 'react';
import PropTypes from 'prop-types';

function UserName({userName}) {
    return <div className='userName'><p>{userName}</p></div>
};

UserName.protoTypes = {
    userName: PropTypes.string
};

export default UserName;