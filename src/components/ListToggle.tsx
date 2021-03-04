import * as React from 'react';

export interface ListToggleState {
  toggled: boolean;
}

export default class ListToggle extends React.Component<{}, ListToggleState> {
  constructor(state: ListToggleState) {
    super(state);
    this.state = { toggled: false };
  }

  handleClick() {
    if (this.state.toggled === true) {
      this.setState({ toggled: false });
    } else {
      this.setState({ toggled: true });
    }
  }

  render() {
    return (
      <div onClick={this.handleClick} data-toggled={this.state.toggled} className="ListToggle">
        <div>
          <i className="fa fa-fw fa-plus"></i>
          <i className="fa fa-fw fa-check"></i>
        </div>
      </div>
    );
  }
}
