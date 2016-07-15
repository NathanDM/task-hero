import React from 'react';
import FilterLink from '../../containers/filterLink.jsx';

class Filter extends React.Component {
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
      <div className="mdl-layout__tab-bar mdl-js-ripple-effect">
        <FilterLink filter="SHOW_ALL">
          All
        </FilterLink>
        <FilterLink filter="SHOW_ACTIVE">
          Active
        </FilterLink>
        <FilterLink filter="SHOW_COMPLETED">
          Completed
        </FilterLink>
      </div>
    );
  }
}

export default Filter;
