import React, { Component } from 'react';
import styles from './LeftPart.css';
import 'react-select/less/default.less';
// import { ActivityDialog, ConnectDialog, MineDialog, PartyDialog,
//    StoryDialog } from '../../component/LeftAppear';
import { LeftAppear } from '../../component/LeftAppear';

export default class LeftPart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  enterStory() {
    this.props.showStory();
  }
  enterActivity() {
    this.props.showActivity();
  }
  enterParty() {
    this.props.showParty();
  }
  enterMine() {
    this.props.showMine();
  }
  enterConnect() {
    this.props.showConnect();
  }
  leaveStory() {
    this.props.hideStory();
  }
  leaveActivity() {
    this.props.hideActivity();
  }
  leaveParty() {
    this.props.hideParty();
  }
  leaveMine() {
    this.props.hideMine();
  }
  leaveConnect() {
    this.props.hideConnect();
  }
  moveOut() {
    this.props.moveOut();
    this.props.leftdefaultLeave();
  }

  renderleftAppear(dialog) {
    if (dialog) {
      return (
        <div>
          <LeftAppear
            leftdialoglist={this.props.leftdialoglist}
          />
        </div>
      );
    }
    return <div></div>;
  }

  renderlogin() {
    return (
      <div>
        <input className={styles.accountinput} type="text" />
        <input className={styles.accountpassword} type="password" />
        <button className={styles.accountlogin}>登陆</button>
        <button className={styles.accountregist}>注册</button>
      </div>
    );
  }

  render() {
    const { storydialog, activitydialog, partydialog,
      minedialog, connectdialog, showleftpage } = this.props;
    let animatestyle;
    if (showleftpage === 0) {
      return (<div></div>);
    } else if (showleftpage === true) {
      animatestyle = `${styles.leftstyle} ${styles.leftstyleAppear}`;
    } else {
      animatestyle = `${styles.leftstyle} ${styles.leftstyleDisappear}`;
    }
    return (
      <div onMouseLeave={() => this.moveOut()}>
        <div className={animatestyle} >
          <img src='../../images/logo.png' alt='终南明舍' />
          <div onMouseEnter={() => this.enterStory()} onMouseLeave={() => this.leaveStory()}>
            <div className={styles.listgroupitem} >
              <h4
                className={`
                ${styles.listgroupitemheading}
                ${storydialog ? styles.listitemactive : ''}
                `}
              >明舍故事
              </h4>
            </div>
            <div>
              {this.renderleftAppear(storydialog)}
            </div>
          </div>
          <div onMouseEnter={() => this.enterActivity()} onMouseLeave={() => this.leaveActivity()}>
            <div className={styles.listgroupitem}>
              <h4
                className={`
                ${styles.listgroupitemheading}
                ${activitydialog ? styles.listitemactive : ''}
                `}
              >明舍活动
              </h4>
            </div>
            <div>
              {this.renderleftAppear(activitydialog)}
            </div>
          </div>
          <div onMouseEnter={() => this.enterParty()} onMouseLeave={() => this.leaveParty()}>
            <div className={styles.listgroupitem}>
              <h4
                className={`
                ${styles.listgroupitemheading}
                ${partydialog ? styles.listitemactive : ''}
                `}
              >终南有约
              </h4>
            </div>
            <div>
              {this.renderleftAppear(partydialog)}
            </div>
          </div>
          <div onMouseEnter={() => this.enterMine()} onMouseLeave={() => this.leaveMine()}>
            <div className={styles.listgroupitem}>
              <h4
                className={`
                ${styles.listgroupitemheading}
                ${minedialog ? styles.listitemactive : ''}
                `}
              >我的明舍
              </h4>
            </div>
            <div>
              {this.renderleftAppear(minedialog)}
            </div>
          </div>
          <div onMouseEnter={() => this.enterConnect()} onMouseLeave={() => this.leaveConnect()}>
            <div className={styles.listgroupitem}>
              <h4
                className={`
                ${styles.listgroupitemheading}
                ${connectdialog ? styles.listitemactive : ''}
                `}
              >联系我们
              </h4>
            </div>
            <div>
              {this.renderleftAppear(connectdialog)}
            </div>
          </div>
          {this.renderlogin()}
        </div>
      </div>
    );
  }
}
