import React from 'react';
import Input from '../input/Input';
import Button from '../button/Button';

function NewCourseForm() {

    return <form className='form'>
        <div className='flex'>
            <div><p>Title</p><Input></Input></div>
            <div><Button onClick = {() => {}}>Create course</Button></div>
        </div>
        <div>
            <div><p>Description</p></div>
            <div><textarea></textarea></div>
            <div className='flex'>
                <div>
                    <div><h3>Add authors</h3><p>Author name</p><Input></Input><Button name="Create author" onClick = {() => {}}></Button></div>
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