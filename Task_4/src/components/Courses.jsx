import React, { useState, useEffect, useContext } from 'react';
import Card from './Card';
import Input from './Input';
import Button from './Button';
import {Context} from '../store/Context'
import { Link } from 'react-router-dom'

function Courses() {

  let [inputValue, setValue] = useState('');

  const {courses, authors, fetchCourses, fetchAuthors, removeCourse} = useContext(Context)

  useEffect(async () => {
    await fetchCourses()
  }, [])

  useEffect(async () => {
    await fetchAuthors()
  }, [])
 
    return <div>
              <div className='wrapper flex'>
                <div><Input onChange={(event) => setValue(event.target.value)} ></Input>
                  <Button children='Search' className="classButtonHeader"
                  onClick = {() => {if(inputValue) {courses.filter(course => {
                    return course.title.toLowerCase().includes(inputValue.toLowerCase())
                  })}
                  else {return courses}}}></Button>
                </div>
                <div><Link to="/course/add"><Button children='Add new course' className="newCourse"></Button></Link></div>
              </div>
            {courses.map(item => (
              <div className='wrapper'><Card  id = {item.id}
                                              title = {item.title} 
                                              duration = {item.duration} 
                                              creationDate = {item.creationDate}
                                              description = {item.description}
                                              authors = {authors.filter(author => item.authors.includes(author.id))
                                                                                                      .map((author) => {return author.name;})
                                                        }>
                                          </Card>
                </div>
            ))}
          </div>
}

export default Courses;


   