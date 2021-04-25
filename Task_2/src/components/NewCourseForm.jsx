import React from 'react';
import Input from './Input';
import Button from './Button';

function NewCourseForm() {

    return <form>
        <div className='wrapper flex'>
            <div><p>Title</p><Input></Input></div>
            <div><Button children='Create course' className="createCourseButton" onClick = {() => {}}></Button></div>
        </div>
        <div className="wrapper">
            <div><p>Description</p></div>
            <div><textarea></textarea></div>
            <div className='flex'>
                <div>
                    <div><h3>Add authors</h3><p>Author name</p><Input></Input><Button children="Create author" onClick = {() => {}}></Button></div>
                    <div><h3>Duration</h3><p>Author name</p><Input></Input></div>
                </div>
                <div>
                    <div><h3>Authors</h3><Input></Input></div>
                    <div><h3>Course authors</h3></div>
                </div>
            </div>
        </div>
    </form>
};

export default NewCourseForm;