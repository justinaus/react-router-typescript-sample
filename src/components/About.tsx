import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export interface Props extends RouteComponentProps<About> {
  
}

class About extends React.Component<Props, {}> {
  constructor(props : Props){
    super(props);
  }

  render() {
    return(
      <div>
        <h2>about</h2>
        <button 
          onClick={ ( e: any ) => this.props.history.goBack() }>
            go back
        </button>
      </div>
    );
  }
}

export default About;
