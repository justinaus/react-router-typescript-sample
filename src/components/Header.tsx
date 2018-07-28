import * as React from 'react';
import { Link } from 'react-router-dom';
import { RouterPathEnum } from '../App';

export interface Props {
  
}

class Header extends React.Component<Props, {}> {
  constructor(props : Props){
    super(props);
  }

  render() {
    return(
      <ul>
        <li><Link to={ RouterPathEnum.HOME }>home</Link></li>
        <li><Link to={ RouterPathEnum.ABOUT }>about</Link></li>
        <li><Link to={ RouterPathEnum.BOARD }>board</Link></li>
      </ul>
    );
  }
}

export default Header;
