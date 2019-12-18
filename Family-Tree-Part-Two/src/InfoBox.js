import React from 'react';
import NamesList from './NamesList';

class InfoBox extends React.Component {
  render() {
    return(
      <div className="info-box">
       The Vanderbilt Family
        <NamesList namesList={this.props.namesList} />
        <h1>{this.props.name}</h1>
        <h4>{this.props.info}</h4>
        <img src="Izzy.png" alt="ahhh" height="50px"></img>
      </div>
    );
  }
}

export default InfoBox;
