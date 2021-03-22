import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import NavBar from './components/Navbar';
import UserDetail from './components/UserDetail';

//TODO: UserDetail to be implemented
function App() {
  document.title = "Gark's GUSS";
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/detail" exact component={UserDetail}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
