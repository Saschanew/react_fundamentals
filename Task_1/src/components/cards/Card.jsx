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
                <Detail label="Authors: ">{authors.join(', ')}</Detail>
                <Detail label="Duration: ">{duration}</Detail>
                <Detail label="Created: ">{creationDate}</Detail>
                   <Button className="schowCorseButton">Show course</Button>
                </div> 
            </div>
};

Card.propTypes = {
    title: PropTypes.string,
    duration: PropTypes.string,
    creationDate: PropTypes.string,
    description: PropTypes.string,
    authors: PropTypes.array
};

function Detail({ children, label }) { 
    return  <div className='detail'><div className='detailLabel'><p>{label}</p></div><div className='detailInfo'>{children}</div></div>
}

export default Card;