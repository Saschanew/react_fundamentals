import {React, useContext} from 'react';
import CourseInfo from './components/CourseInfo';
import NewCourseForm from './components/NewCourseForm';
import UpdateCourse from './components/UpdateCourse';
import Login from './components/Login';
import Registration from './components/Registration';
import Courses from './components/Courses';
import AppContext from './store/AppContext'

function PrivateRoute({component}) {

    const {user} = useContext(AppContext)

    if (component === 'Courses') {
        return <Courses></Courses>
    }    

    if(user.role === 'admin') {
        if (component === 'CourseInfo') {
            return <CourseInfo></CourseInfo>
        }
        if (component === 'NewCourseForm') {
            return <NewCourseForm></NewCourseForm>
        }
        if (component === 'UpdateCourse') {
            return <UpdateCourse></UpdateCourse>
        }
    }
    if (component === 'Login') {
        return <Login></Login>
    }
    if (component === 'Registration') {
        return <Registration></Registration>
    }
    return <Courses></Courses>
};

export default PrivateRoute;