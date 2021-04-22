import React, { useState } from 'react';
import Card from './Card';
import Input from '../input/Input';
import Button from '../button/Button';
import NewCourseForm from '../newCourseForm/NewCourseForm';
import * as Const from '../../const/Const';

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
                <Button className="classButtonHeader"
                onClick = {() => {if(inputValue) {setCourseList(mockedCourseList.filter(course => {
                  return course.title.toLowerCase().includes(inputValue.toLowerCase())
                }))}
                else {setCourseList(Const.clearState)}}}>Search</Button>
              </div>
              <div><Button className="newCourse" onClick = {() => setState(false)}>Add new course</Button></div>
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


   