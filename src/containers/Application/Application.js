import React, { Component } from 'react';
import { connect } from 'react-redux';

import 'bootstrap/less/bootstrap.less';
import '../../styles/bootstrap-datetimepicker.min.less';
import '../../styles/common.less';
import 'font-awesome/less/font-awesome.less';
import styles from './Application.css';

@connect(
  () => ({})
)
export default class Application extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className={styles.app}>{this.props.children}</div>;
  }
}
