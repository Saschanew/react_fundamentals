import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import { Redirect } from 'react-router-dom'


function Card({id, title, duration, creationDate, description, authors}) {
    let [toCourse, setToCourse] = useState(false);
    if (toCourse) {
        return <Redirect to={"/courses/:" + id} />    
    }
    return <div className='card flex'>
                <div className='description'>
                    <div><h2>{title}</h2></div>
                    <div className='text'><p>{description}</p>
                    </div>
                </div>
                <div className='details'>
                <Detail label="Authors: ">{authors.join(', ')}</Detail>
                <Detail label="Duration: ">{duration}</Detail>
                <Detail label="Created: ">{creationDate}</Detail>
                   <Button children='Show course' className="schowCorseButton" onClick = {() => setToCourse(true)}></Button>
                </div> 
            </div>
};

Card.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    duration: PropTypes.number,
    creationDate: PropTypes.string,
    description: PropTypes.string,
    authors: PropTypes.array
};

function Detail({ children, label }) { 
    return  <div className='detail'><div className='detailLabel'><p>{label}</p></div><div className='detailInfo'>{children}</div></div>
}

export default Card;