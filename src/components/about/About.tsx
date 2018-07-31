import * as React from 'react';
import { RouteComponentProps } from 'react-router';

class About extends React.Component<RouteComponentProps<About>, {}> {
  constructor(props : RouteComponentProps<About>){
    super(props);
  }

  render() {
    return(
      <div>
        <h2>about</h2>
        <button onClick={ ( e: any ) => this.props.history.goBack() }>
            go back
        </button>
      </div>
    );
  }
}

export default About;
