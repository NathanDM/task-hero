import React, { PropTypes } from 'react';

class Task extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    window.componentHandler.upgradeDom();
  }

  componentDidUpdate() {
    window.componentHandler.upgradeDom();
  }

  render() {
    let input;
    const id = ['list-checkbox-', this.props.id].join('');

    if (this.props.completed) {
      input =
        <input type="checkbox" id={id} className="mdl-checkbox__input" defaultChecked onChange={this.props.onClick}/>;
    } else {
      input =
        <input type="checkbox" id={id} className="mdl-checkbox__input" onChange={this.props.onClick}/>;
    }
    return (
      <li className="mdl-list__item mdl-list__item--three-line">
        <span className="mdl-list__item-primary-content">
          <i className="material-icons  mdl-list__item-avatar">person</i>
          <span className="title">{this.props.text}</span>
          <span className="mdl-list__item-text-body">
            Bryan Cranston played the
          </span>
        </span>
        <span className="mdl-list__item-secondary-action">
          <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" htmlFor={id}>
            {input}
          </label>
        </span>
      </li>
    );
  }
}

Task.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};

export default Task;
