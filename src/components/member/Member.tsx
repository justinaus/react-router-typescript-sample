import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import MemberModel from '../../models/MemberModel';

interface IProps extends RouteComponentProps<Member> {
  memberModel: MemberModel | null;
}

class Member extends React.Component<IProps, {}> {
  constructor(props : IProps){
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