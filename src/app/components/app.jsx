import React from 'react';
import AddTask from '../containers/addTask.jsx';
import VisibleTaskList from '../containers/visibleTaskList.jsx';
import Filter from './filter/filter.jsx';
import Splash from './splash.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  componentDidMount() {
    window.componentHandler.upgradeDom();
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 650);
  }

  componentDidUpdate() {
    window.componentHandler.upgradeDom();
  }

  render() {
    if (this.state.isLoading) {
      return <Splash/>;
    }
    return (
      <div>
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
          <header className="mdl-layout__header">
            <ul className="demo-list-three mdl-list">
              <li className="mdl-list__item mdl-list__item--three-line">
                <span className="mdl-list__item-primary-content">
                  <div className="avatars">
                    <div className="mdl-badge" data-badge="99">
                    </div>
                  </div>
                  <span className="title">Bryan Cranston</span>
                  <span className="mdl-list__item-text-body">
                    Bryan Cranston played the
                  </span>
                </span>
                <span className="mdl-list__item-secondary-content">
                  <a className="mdl-list__item-secondary-action" href="#"><i className="material-icons">star</i></a>
                </span>
              </li>
            </ul>
            <Filter />
          </header>
          <div className="mdl-layout__drawer">
            <span className="mdl-layout-title">Title</span>
          </div>
          <main className="mdl-layout__content">
            <div className="page-content">
              <div className="content">
                <VisibleTaskList />
                <AddTask/>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

App.propTypes = {};

export default App;
