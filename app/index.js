/** module deps */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Map from 'Components/map';

class App extends React.Component {
  render() {
    return (
      <div>
        <input />
        <Map></Map>
      </div>
    )
  }
};

ReactDOM.render(<App />, document.getElementById("app"));