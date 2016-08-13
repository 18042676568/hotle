import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import 'react-select/less/default.less';
import { LeftPart } from '../../component/LeftPart';
// import { ReactCSSTransitionGroup } from 'react-motion';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
// import { RightPart } from '../../component/RightPart';
import * as homeACtions from '../../actions/leftpart';
import getAsyncConnectError from '../../helpers/getAsyncConnectError';
import styles from './HomePage.css';

@connect(
  ({ homepage, reduxAsyncConnect, routing }) => ({
    homepage,
    error: getAsyncConnectError(reduxAsyncConnect, 'homepage'),
    selected: routing.locationBeforeTransitions.pathname,
  }),
  dispatch => bindActionCreators(Object.assign({}, homeACtions, { push }), dispatch)
)
export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  leftenter() {
    this.props.leftdefaultEnter();
  }

  renderleft() {
    return (
      <div>
        <LeftPart
          showStory={this.props.showStory}
          showConnect={this.props.showConnect}
          showMine={this.props.showMine}
          showParty={this.props.showParty}
          showActivity={this.props.showActivity}
          hideStory={this.props.hideStory}
          hideConnect={this.props.hideConnect}
          hideMine={this.props.hideMine}
          hideParty={this.props.hideParty}
          hideActivity={this.props.hideActivity}
          moveOut={this.props.moveOut}
          leftdefaultLeave={this.props.leftdefaultLeave}
          activitydialog={this.props.homepage.activitydialog}
          storydialog={this.props.homepage.storydialog}
          partydialog={this.props.homepage.partydialog}
          minedialog={this.props.homepage.minedialog}
          connectdialog={this.props.homepage.connectdialog}
          leftdialoglist={this.props.homepage.leftdialoglist}
          titles={this.props.homepage.titles}
          showleftpage={this.props.homepage.showleftpage}
        />
        <div
          className={`${styles.leftdefault}`}
          onMouseEnter={() => this.leftenter()}
        >
        </div>
      </div>
      );
  }

  componentWillMount() {
    this.props.getPage();
  }

  renderright() {
    return (
      <div className={`${styles.rightpart}`}>
      </div>
      );
  }

  render() {
    return (
      <div className={`${styles.htmlbackground}`}>
          {this.renderleft()}
          {this.renderright()}
      </div>
    );
  }
}
