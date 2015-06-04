import React from 'react';

class Hello extends React.Component {
  render() {
    return (
      <div>Hello!</div>
    );
  }
}

let init = function(elementId) {
  React.render(<Hello />, document.getElementById(elementId));
}

export default init;
