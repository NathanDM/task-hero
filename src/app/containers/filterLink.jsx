import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';


class Link extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let style = 'mdl-layout__tab';
    const anchor = ['#scroll-tab-', this.props.filter].join('');
    if (this.props.active) {
      style += ' is-active';
    }
    return (
      <a
        className={style}
        href={anchor}
        onClick={e => {
          e.preventDefault();
          this.props.onClick();
        }}
      >
        {this.props.children}
      </a>
    );
  }
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired
};

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(setVisibilityFilter(ownProps.filter));
  }
});

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);

export default FilterLink;
