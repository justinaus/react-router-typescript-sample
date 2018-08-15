import * as React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/Home';
import About from './components/about/About';
import HeaderSmall from './components/header/HeaderSmall';
import { RouterPathEnum } from './enums/RouterPathEnum';
import Members from './components/member/Members';

interface IState {
  isSmallScreen: boolean;
}

class App extends React.Component<{}, IState> {
  constructor(props : any){
    super(props);

    this.updateDimensions = this.updateDimensions.bind( this );

    this.state = { isSmallScreen: false };
}
  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);

    this.updateDimensions( null );
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  private updateDimensions(e: any):void {
    this.setState( { isSmallScreen: window.innerWidth < 500 } );
  }

  public render() {
    return (
      <BrowserRouter>
        <div>
          { this.state.isSmallScreen ? <HeaderSmall /> : <Header /> }
          <Switch>
            <Route exact={true} path={RouterPathEnum.HOME} component={Home}/>
            <Route path={RouterPathEnum.ABOUT} component={About}/>
            <Route path={RouterPathEnum.MEMBER} component={Members}/>
            <Redirect to={RouterPathEnum.HOME} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
