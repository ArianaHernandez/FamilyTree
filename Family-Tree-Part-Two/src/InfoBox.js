import React from 'react';
import NamesList from './NamesList';

class InfoBox extends React.Component {
  render() {
    return(
      <div className="info-box">
       The Vanderbilt Family
        <NamesList namesList={this.props.namesList} />
        <h4>{this.props.info}</h4>
      </div>
    );
  }
}

export default InfoBox;
