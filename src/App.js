import './App.css';
import Home from "./pages";
import {BrowserRouter as Router, Switch} from 'react-router-dom'

//Credits to Brian Design on Youtube: https://www.youtube.com/watch?v=Nl54MJDR2p8
//Credits to Emma Bostian's course on Design Systems with React & Storybook

function App() {
  return (
      <Router>
        <Switch path="/" component={Home} exact/>
        <Home/>
      </Router>

  );
}

export default App;
