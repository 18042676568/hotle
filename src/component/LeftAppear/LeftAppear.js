import React, { Component } from 'react';
import styles from './dialog.css';
import 'react-select/less/default.less';

export default class LeftAppear extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getItem() {

  }

  render() {
    const { leftdialoglist } = this.props;
    const list = leftdialoglist.map((d) =>
      <li
        className={`${styles.listitem}`}
        onClick={() => this.getItem()}
      >
      {d.head}
      </li>
    );
    return (
      <div>
        <ul className={`${styles.appearstyle} `}>
          {list}
        </ul>
      </div>
    );
  }
}
