import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {State} from './store/State'
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <State>
        <Router>
          <div>
            <Header/>
            <section>
            <Switch>
                <Route exact path='/'>
                  <PrivateRoute component='Courses'></PrivateRoute>
                </Route>
                <Route exact path='/login'>
                  <PrivateRoute component='Login'></PrivateRoute>
                </Route>
                <Route exact path='/registration'>
                  <PrivateRoute component='Registration'></PrivateRoute>
                </Route>
                <Route exact path='/courses/:id'>
                  <PrivateRoute component='CourseInfo'></PrivateRoute>
                </Route>
                <Route exact path='/course/add'>
                  <PrivateRoute component='NewCourseForm'></PrivateRoute>
                </Route>
                <Route exact path='/courses/update/:courseId'>
                  <PrivateRoute component='UpdateCourse'></PrivateRoute>
                </Route>
            </Switch>
            </section>
          </div>
        </Router>
    </State>
  );
}

export default App;
