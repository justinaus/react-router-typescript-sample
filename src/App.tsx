import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Board from './components/Board';

export enum RouterPathEnum {
  HOME = '/',
  ABOUT = '/about',
  BOARD = '/board'
}

class App extends React.Component {
  public render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route exact={true} path={RouterPathEnum.HOME} component={Home}/>
            <Route path={RouterPathEnum.ABOUT} component={About}/>
            <Route path={RouterPathEnum.BOARD} component={Board}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
