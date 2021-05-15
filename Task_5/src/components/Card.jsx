import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import { Redirect } from 'react-router-dom'
import correction from '../assets/correction.png';
import trash from '../assets/trash.png';
import AppContext from '../store/AppContext'


function Card({id, title, duration, creationDate, description, authors}) {

    let {user} = useContext(AppContext)

    let [toCourse, setToCourse] = useState(false);
    let [toUpdate, setToUpdate] = useState(false);
    if (toCourse) {
        return <Redirect to={"/courses/" + id} />    
    }
    if (toUpdate) {
        return <Redirect to={"/courses/update/" + id} />    
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
                    <div className="flex">
                    <Button children='Show course' className="schowCorseButton" onClick = {() => setToCourse(true)}></Button>
                    {user.role === 'admin' &&
                    <Button className="updateButton" onClick = {() => setToUpdate(true)}><img src={correction} alt="Correction"/></Button>
                    }
                    {user.role === 'admin' &&
                    <Button className="updateButton" onClick = {() => {}}><img src={trash} alt="Trash"/></Button>
                    }
                    </div>
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