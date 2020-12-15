import styles from './app.module.css';
import Login from './components/login/login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App({authService}) {
  return (
    <div className={styles.app}>
      <Login authService={authService}/>
    </div>
    
  )
  
}

export default App;
