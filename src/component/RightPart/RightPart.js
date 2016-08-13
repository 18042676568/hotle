import React, { Component } from 'react';
import styles from './RightPart.css';
import 'react-select/less/default.less';

export default class RightPart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={`list-group ${styles.rightstyle}`} >
        <a href='#' className='list-group-item'>
          <h4 className='list-group-item-heading'>明舍故事</h4>
        </a>
        <a href='#' className='list-group-item'>
          <h4 className='list-group-item-heading'>明舍活动</h4>
        </a>
        <a href='#' className='list-group-item'>
          <h4 className='list-group-item-heading'>终南有约</h4>
        </a>
        <a href='#' className='list-group-item'>
          <h4 className='list-group-item-heading'>我的明舍</h4>
        </a>
        <a href='#' className='list-group-item'>
          <h4 className='list-group-item-heading'>联系我们</h4>
        </a>
      </div>
    );
  }
}
