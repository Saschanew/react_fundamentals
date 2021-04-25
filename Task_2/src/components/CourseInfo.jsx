import React, { useState } from 'react';
import Button from './Button';
import { Link, useParams } from 'react-router-dom'
import Axios from 'axios';

function CourseInfo() {
    let [course, setCourse] = useState(
        {}
    );
    let { id } = useParams();
    Axios.get("http://localhost:3000/courses", {params: {id: id}
      }).then((responce) => {
        setCourse(responce.data)
  });
    return <div className='wrapper'>
            <Link to="/courses"><Button children='Back to courses'></Button></Link>
            <h2>{course.title}</h2>
                <div className='flex'>
                    <div className='description'>
                        <div className='text'><p>{course.description}</p>
                        </div>
                    </div>
                    <div className='details'>
                    <Detail label="Authors: ">{course.id}</Detail>
                    <Detail label="Duration: ">{course.duration}</Detail>
                    <Detail label="Created: ">{course.creationDate}</Detail>
                    <Detail label="Authors: ">{course.authors.join(', ')}</Detail>
                    </div> 
                </div>
            </div>
};

function Detail({ children, label }) { 
    return  <div className='detail'><div className='detailLabel'><p>{label}</p></div><div className='detailInfo'>{children}</div></div>
}

export default CourseInfo;