import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { RouterPathEnum } from '../App';

export interface Props extends RouteComponentProps<Home> {
  
}

class Home extends React.Component<Props, {}> {
  constructor(props : Props){
    super(props);

    this.onClickMove = this.onClickMove.bind( this );
  }

  render() {
    return(
      <div>
        <h2>home</h2>
        <button 
          onClick={ ( e: any ) => this.onClickMove( RouterPathEnum.ABOUT ) }>
            go about
        </button>
        &nbsp;
        <button 
          onClick={ ( e: any ) => this.onClickMove( RouterPathEnum.BOARD ) }>
            go board
        </button>
      </div>
    );
  }

  private onClickMove( routerPathEnum: RouterPathEnum ):void {
    this.props.history.push( routerPathEnum );
  }
}

export default Home;
