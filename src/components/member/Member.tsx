import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import MemberModel from '../../models/MemberModel';

export interface Props extends RouteComponentProps<Member> {
  memberModel: MemberModel | null;
}

class Member extends React.Component<Props, {}> {
  constructor(props : Props){
    super(props);
  }

  render() {
    const memberModel: MemberModel | null = this.props.memberModel;

    return(
      <div>
        <h2>{ memberModel ? memberModel.getId() + ' / ' + memberModel.getName() : 'no member' }</h2>
      </div>
    );
  }
}

export default Member;