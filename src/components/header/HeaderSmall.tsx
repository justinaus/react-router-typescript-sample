import * as React from 'react';

class HeaderSmall extends React.Component<React.Props<HeaderSmall>, {}> {
  constructor(props : React.Props<HeaderSmall>){
    super(props);
  }

  render() {
    return(
      <div>
        ≡ menu
      </div>
    );
  }
}

export default HeaderSmall;
