import React, { PropTypes } from 'react';

/**
 * This class wrapped css classes to a simple Element
 *
 * <Animation name="dance-two"/>
 * Actual animation's classes:
 *   -dance
 *   -dance-two
 */
class Animation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="animation">
        <div className={this.props.name}>
        </div>
      </div>
    );
  }
}

Animation.propTypes = {
  name: PropTypes.string.isRequired
};

export default Animation;
