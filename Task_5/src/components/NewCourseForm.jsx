import {React, useContext, useState} from 'react';
import Input from './Input';
import Button from './Button';
import AppContext from '../store/AppContext'
import { v4 as uuidv4 } from 'uuid';
import { Redirect } from 'react-router-dom'

function NewCourseForm() {

    const {authors, addAuthor, addCourse} = useContext(AppContext)    
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

  const formSubmit = () => {
    newCourse.id = uuidv4()
    newCourse.authors = authorsList
    addCourse(newCourse)
    added=true
  };

    if(added) return <Redirect to={"/"} />  

    return <form>
        <div className='wrapper flex'>
            <div><p>Title</p><Input name='title' required={true} onChange={handleChange}></Input></div>
            <div><Button children='Create course' className="createCourseButton" onClick = {formSubmit}></Button></div>
        </div>
        <div className="wrapper">
            <div><p>Description</p></div>
            <div><textarea name='description' required onChange={handleChange}></textarea></div>
            <div><p>Creation date</p>{(new Date()).toLocaleString()}</div>
            <div className='flex'>
                <div>
                    <div><h3>Add authors</h3><p>Author name</p><Input></Input><Button children="Create author" type='button' 
                    onClick = {() => {}}></Button></div>
                    <div><h3>Duration</h3><p>Duration</p><Input name='duration' required={true} onChange={handleChange}></Input></div>
                </div>
                <div>
                    <div className='details'><h3>Authors</h3>
                        {authors.map(author => (<div className='flex detail'><p>{author.name}</p><Button children='Add author' type='button'
                        onClick = {() => {
                            setAuthorsList(authorsList => [...authorsList, author]);
                            }}></Button></div>))}
                    </div>
                    <div><h3>Course authors</h3>
                        {authorsList.map(author => (<div className='flex detail'><p>{author.name}</p><Button children='Delete author' type='button'
                            onClick = {() => {
                                setAuthorsList(authorsList.filter(item => item.id !== author.id))
                            }}></Button></div>))}
                    </div>
                </div>
            </div>
        </div>
    </form>
};

export default NewCourseForm;