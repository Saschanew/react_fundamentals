import React from 'react';
import Input from '../input/Input';
import Button from '../button/Button';

function NewCourseForm() {
    return <form>
        <div className='flex'>
            <div><p>Title</p><Input id = "inputNewCourseTitle"></Input></div>
            <div><Button name="Create course" onClick = {() => {}} ></Button></div>
        </div>
        <div>
            <div><p>Description</p></div>
            <div><textarea></textarea></div>
            <div className='flex'>
                <div></div>
                <div></div>
            </div>
        </div>
    </form>
};

export default NewCourseForm;