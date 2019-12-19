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
       {/* <img src="https://drive.google.com/uc?export=download&id=1JUd9W6BKj6LzzEdyDbOu6Z-RI0BvXoq_" height="200px" />
      */}
      <img src={this.props.picture}/>
      </div>
    );
  }
}

export default InfoBox;
