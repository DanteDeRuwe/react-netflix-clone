import * as React from 'react';

export interface ListToggleState {
  toggled: boolean;
}

export default class ListToggle extends React.Component<{}, ListToggleState> {
  constructor(props) {
    super(props);
    this.state = { toggled: false };
  }

  toggle = () => {
    this.setState({ toggled: !this.state.toggled });
  };

  render() {
    return (
      <div onClick={this.toggle} data-toggled={this.state.toggled} className="ListToggle">
        <div>
          <i className="fa fa-fw fa-plus"></i>
          <i className="fa fa-fw fa-check"></i>
        </div>
      </div>
    );
  }
}
