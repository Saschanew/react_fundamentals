import React, { useEffect, useContext} from 'react';
import Button from './Button';
import { Link, useParams } from 'react-router-dom'
import AppContext from '../store/AppContext'

function CourseInfo() {
    const {course, authors, getCourse} = useContext(AppContext)

    let { id } = useParams();
    useEffect(async () => {
        await getCourse(id)
    }, {})
   
    return <div className='card wrapper'>
            <Link to="/"><Button children='Back to courses'></Button></Link>
            <h2>{course.title}</h2>
                <div className='flex'>
                    <div className='description'>
                        <div className='text'><p>{course.description}</p>
                        </div>
                    </div>
                    <div className='details'>
                    <Detail label="ID: ">{course.id}</Detail>
                    <Detail label="Duration: ">{course.duration}</Detail>
                    <Detail label="Created: ">{course.creationDate}</Detail>
                    <Detail label="Authors: ">{authors.filter(author => course.authors.includes(author.id))
                                                                                                      .map((author) => {return author.name;})
                                            }</Detail>
                    </div> 
                </div>
            </div>
};

function Detail({ children, label }) { 
    return  <div className='detail'><div className='detailLabel'><p>{label}</p></div><div className='detailInfo'>{children}</div></div>
}

export default CourseInfo;