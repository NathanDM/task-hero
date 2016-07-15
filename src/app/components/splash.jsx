import React from 'react';

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="splash">
        <div className="pony-eye">
          <div className="pony-iris">
            <div className="pony-pupil">
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Splash.propTypes = {};

export default Splash;
