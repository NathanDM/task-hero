import React, { PropTypes } from 'react';
import Task from './task.jsx';

class TaskList extends React.Component {
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
    return (
      <section className="is-active">
        <div className="page-content">
          <ul className="demo-list-control mdl-list">
            {this.props.tasks.map(task =>
              <Task
                key={task.id}
                {...task}
                onClick={() => this.props.onTaskClick(task.id)}
              />
            )}
          </ul>
        </div>
      </section>);
  }
}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTaskClick: PropTypes.func.isRequired
};

export default TaskList;
