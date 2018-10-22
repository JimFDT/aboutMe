import React, {Component} from 'react';

class Header extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var occupation = this.props.data.occupation;
      var fbUrl = this.props.data.social[0].url;
      var googleUrl = this.props.data.social[1].url;
      var linkedinUrl = this.props.data.social[2].url;
      var cakeUrl = this.props.data.social[3].url;
      var githubUrl = this.props.data.social[4].url;
    }

    return (
      <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
          <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
            <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Portfolio</a></li>
            <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
          </ul>

        </nav>

        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">Hello, I'm Chin Shiang !</h1>
            <h3>目前任職於<span>{occupation}</span>，熱愛<span>前/後端網站技術</span>。讓我們<a className="smoothscroll"
                                                                             href="#about">開始滾動</a>並進一步<a
              className="smoothscroll" href="#about">了解我</a>吧！</h3>
            <hr/>
            <ul className="social">
              <li><a href={fbUrl} target="_blank"><i className="fa fa-facebook"></i></a></li>
              <li><a href={googleUrl} target="_blank"><i className="fa fa-google-plus"></i></a></li>
              <li><a href={linkedinUrl} target="_blank"><i className="fa fa-linkedin"></i></a></li>
              <li><a href={cakeUrl} target="_blank"><i className="fa fa-pencil-square-o"></i></a></li>
              <li><a href={githubUrl} target="_blank"><i className="fa fa-github"></i></a></li>
            </ul>
          </div>
        </div>
        <p className="scrolldown">
          <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
        </p>

      </header>
    );
  }
}

export default Header;
