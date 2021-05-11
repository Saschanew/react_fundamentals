import Header from './components/Header';
import Courses from './components/Courses';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './components/Login';
import Registration from './components/Registration';
import CourseInfo from './components/CourseInfo';
import {State} from './store/State'
import NewCourseForm from './components/NewCourseForm';
import UpdateCourse from './components/UpdateCourse';

function App() {
  return (
    <State>
        <Router>
          <div>
            <Header/>
            <section>
            <Switch>
                <Route exact path='/'>
                    <Courses></Courses>
                </Route>
                <Route exact path='/login'>
                    <Login></Login>
                </Route>
                <Route exact path='/registration'>
                    <Registration></Registration>
                </Route>
                <Route exact path='/courses/:id' component={CourseInfo}></Route>
                <Route exact path='/course/add'>
                    <NewCourseForm></NewCourseForm>
                </Route>
                <Route exact path='/courses/update/:courseId' component={UpdateCourse}>
                    <UpdateCourse></UpdateCourse>
                </Route>
            </Switch>
            </section>
          </div>
        </Router>
    </State>
  );
}

export default App;
