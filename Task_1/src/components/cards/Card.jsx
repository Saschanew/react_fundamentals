import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button/Button';


function Card({title, duration, creationDate, description, authors}) {
    return <div className='card flex'>
                <div className='description'>
                    <div><h2>{title}</h2></div>
                    <div className='text'><p>{description}</p>
                    </div>
                </div>
                <div className='details'>
                    <div className='detail'><div className='detailLabel'><p>Authors: </p></div><div className='detailInfo'>{authors.join(', ')}</div></div>
                    <div className='detail'><div className='detailLabel'><p>Duration: </p></div><div className='detailInfo'>{duration}</div></div>
                    <div className='detail'><div className='detailLabel'><p>Created: </p></div><div className='detailInfo'>{creationDate}</div></div>
                   <Button name="Show course" className="schowCorseButton"></Button>
                </div> 
            </div>
};

Card.protoTypes = {
    title: PropTypes.string,
    duration: PropTypes.string,
    creationDate: PropTypes.string,
    description: PropTypes.string,
    authors: PropTypes.array
};

export default Card;