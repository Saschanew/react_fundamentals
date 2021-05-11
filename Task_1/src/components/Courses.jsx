import React, { useState } from 'react';
import Card from './Card';
import Input from './Input';
import Button from './Button';
import NewCourseForm from './NewCourseForm';
import * as Const from '../const/Const';

function Courses() {

  let [isOpen, setState] = useState(true);

  let [inputValue, setValue] = useState('');

  const [mockedCourseList, setCourseList] = useState(
    Const.mockedCourseList
  )

  if(isOpen) {
  return <div>
            <div className='wrapper flex'>
              <div><Input onChange={(event) => setValue(event.target.value)} ></Input>
                <Button children='Search' className="classButtonHeader"
                onClick = {() => {if(inputValue) {setCourseList(mockedCourseList.filter(course => {
                  return course.title.toLowerCase().includes(inputValue.toLowerCase())
                }))}
                else {setCourseList(Const.clearState)}}}></Button>
              </div>
              <div><Button children='Add new course' className="newCourse" onClick = {() => setState(false)}></Button></div>
            </div>
          {mockedCourseList.map(item => (
            <div className='wrapper'><Card title = {item.title} 
                                            duration = {item.duration} 
                                            creationDate = {item.creationDate}
                                            description = {item.description}
                                            authors = {Const.mockedAuthorsList.filter(author => item.authors.includes(author.id))
                                                                                                    .map((author) => {return author.name;})
                                                      }>
                                        </Card>
              </div>
          ))}
        </div>
  } else {
    return <NewCourseForm></NewCourseForm>
  }
}

export default Courses;


   