import Header from './components/Header';
import Courses from './components/Courses';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './components/Login';
import Registration from './components/Registration';
import CourseInfo from './components/CourseInfo';

function App() {
  return (
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
            <Route exact path='/courses/:id' component={CourseInfo}>
            </Route>
        </Switch>
        </section>
      </div>
    </Router>
  );
}

export default App;
