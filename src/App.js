import React from 'react';
import { Route,Switch,BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import { isActive } from './utils/validations';
import Home from './views/home/home';
import HomeIn from './views/home/homeIn';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          {
            isActive()?(
              <React.Fragment>
                <Route path={['/','/auth/inicio',]} component={HomeIn} />
              </React.Fragment>
            ):(
              <React.Fragment>
                <Route path={['/','/inicio']} component={Home} />
                <Route path={['/IniciarSesion',]} component={Home} />
              </React.Fragment>
            )
          }
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
