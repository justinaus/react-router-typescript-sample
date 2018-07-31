import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { RouterPathEnum } from '../enums/RouterPathEnum';

class Home extends React.Component<RouteComponentProps<Home>, {}> {
  constructor(props : RouteComponentProps<Home>){
    super(props);

    this.onClickMove = this.onClickMove.bind( this );
  }

  render() {
    return(
      <div>
        <h2>home</h2>
        <button onClick={ ( e: any ) => this.onClickMove( RouterPathEnum.ABOUT ) }>
            go about
        </button>
        &nbsp;
        <button onClick={ ( e: any ) => this.onClickMove( RouterPathEnum.MEMBER ) }>
            go member
        </button>
      </div>
    );
  }

  private onClickMove( routerPathEnum: RouterPathEnum ):void {
    this.props.history.push( routerPathEnum );
  }
}

export default Home;
