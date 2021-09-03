import './App.css';
import Home from "./pages";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";

//Credits to Brian Design on Youtube: https://www.youtube.com/watch?v=Nl54MJDR2p8
//Credits to Emma Bostian's course on Design Systems with React & Storybook

function App() {
  return (
      <Router>
        <Switch>
            <Route path="/" component={Home} exact/>
        </Switch>
      </Router>
  );
}

export default App;
