import styles from './app.module.css';
import Login from './components/login/login';
import Maker from './components/maker/maker';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App({FileInput, authService, cardRepository}) {
  return (
    <div className={styles.app}>
      <Router>
        <Switch>
          <Route path='/' exact>
            <Login authService={authService}/>
          </Route>
          <Route path='/maker'>
            <Maker FileInput={FileInput} authService={authService} cardRepository={cardRepository} />
          </Route>
        </Switch>
      </Router>
      
    </div>
  )
  
}

export default App;
