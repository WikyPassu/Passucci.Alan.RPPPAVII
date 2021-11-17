import 'bulma/css/bulma.css';
import './App.css';
import Home from './pages/Home';
import Detalle from './pages/Detalle';
import Error404 from './pages/Error404';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Animales from './pages/Animales';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/mascota/:id" component={Detalle}/>
        <Route exact path="/animales/:tipo" component={Animales}/>
        <Route exact path="*" component={Error404}/>
      </Switch>
    </Router>
  );
};

export default App;
