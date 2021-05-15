import {React, useContext, useState, useEffect} from 'react';
import Input from './Input';
import Button from './Button';
import AppContext from '../store/AppContext'
import { useParams, Redirect } from 'react-router-dom'

function UpdateCourse() {

    const {course, authors, addAuthor, getCourse, addCourse} = useContext(AppContext)

    let { courseId } = useParams();
    useEffect(async () => {
        await getCourse(courseId)
    }, {})
   
    let added = false
    let [newCourse, updateFormData] = useState(
        {
            id: '',
            title: '',
            description: '',
            creationDate: (new Date()).toLocaleString(),
            duration: 0,
            authors: []
          }
        )
          
  const handleChange = (e) => {
    updateFormData({
      ...newCourse,
      [e.target.name]: e.target.value.trim()
    });
  };

  let [authorsList, setAuthorsList] = useState(
    []
)

    if(added) return <Redirect to={"/"} />  

    return <form>
        <div className='wrapper flex'>
            <div><p>Title</p><Input name='title' required={true} onChange={handleChange}>{course.title}</Input></div>
            <div><Button children='Update course' className="createCourseButton" onClick = {UpdateCourse}></Button></div>
        </div>
        <div className="wrapper">
            <div><p>Description</p></div>
            <div><textarea name='description' required onChange={handleChange}></textarea></div>
            <div><p>Creation date</p>{course.creationDate}</div>
            <div className='flex'>
                <div>
                    <div><h3>Add authors</h3><p>Author name</p><Input></Input><Button children="Create author" type='button' 
                    onClick = {() => {}}></Button></div>
                    <div><h3>Duration</h3><p>Duration</p><Input name='duration' required={true} onChange={handleChange}>{course.duration}</Input></div>
                </div>
                <div>
                    <div className='details'><h3>Authors</h3>
                        {authors.map(author => (<div className='flex detail'><p>{author.name}</p><Button children='Add author' type='button'
                        onClick = {() => {
                            setAuthorsList(authorsList => [...authorsList, author]);
                            }}></Button></div>))}
                    </div>
                    <div><h3>Course authors</h3>
                        {course.authors.map(author => (<div className='flex detail'><p>{author.name}</p><Button children='Delete author' type='button'
                            onClick = {() => {
                                setAuthorsList(authorsList.filter(item => item.id !== author.id))
                            }}></Button></div>))}
                    </div>
                </div>
            </div>
        </div>
    </form>
};

export default UpdateCourse;