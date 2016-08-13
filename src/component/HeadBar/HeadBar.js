import React from 'react';

export default class HeadBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="header">
        <div className="container">

          <div className="header-left">
            <nav className="navbar navbar-default">
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle collapsed"
                  data-toggle="collapse"
                  data-target="#bs-example-navbar-collapse-1"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
              </div>
              <div className="collapse navbar-collapse nav-wil" id="bs-example-navbar-collapse-1">
                <nav className="link-effect-9" id="link-effect-9">
                  <ul className="nav navbar-nav">
                    <li className="active">
                      <a href="index.html">
                        <i className="glyphicon glyphicon-home" aria-hidden="true"></i>Home
                      </a>
                    </li>
                    <li>
                      <a href="blog.html" className="hvr-bounce-to-bottom">
                        <i className="glyphicon glyphicon-edit" aria-hidden="true"></i>Blog
                      </a>
                    </li>
                    <li>
                      <a href="gallery.html" className="hvr-bounce-to-bottom">
                        <i className="glyphicon glyphicon-picture" aria-hidden="true"></i>Gallery
                      </a></li>
                    <li>
                      <a href="short-codes.html" className="hvr-bounce-to-bottom">
                        <i className="glyphicon glyphicon-text-size" aria-hidden="true"></i>
                        Short Codes
                      </a></li>
                    <li>
                      <a href="mail.html" className="hvr-bounce-to-bottom">
                        <i className="glyphicon glyphicon-envelope" aria-hidden="true"></i>
                      Mail Us
                      </a></li>
                  </ul>
                </nav>
                <div className="header-right">
                  <p><i className="glyphicon glyphicon-earphone" aria-hidden="true"></i>
                  Contact Us
                    <span>+0123 456 789</span></p>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}
