import * as React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { RouterPathEnum } from '../../enums/RouterPathEnum';

class Header extends React.Component<React.Props<Header>, {}> {
  constructor(props : React.Props<Header>){
    super(props);
  }

  render() {
    return(
      <ul className='ulContainer'>
        <li><Link to={ RouterPathEnum.HOME }>home</Link></li>
        <li><Link to={ RouterPathEnum.ABOUT }>about</Link></li>
        <li><Link to={ RouterPathEnum.MEMBER }>member</Link></li>
      </ul>
    );
  }
}

export default Header;
