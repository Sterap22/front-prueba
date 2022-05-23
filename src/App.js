import { Route,Switch,BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/header/header';
import Home from './views/home/home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path={['/','/inicio']} component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
