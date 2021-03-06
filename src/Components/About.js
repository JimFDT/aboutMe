import React, {Component} from 'react';

class About extends Component {
  render() {
    if (this.props.data) {
      var {name, occupation, email, phone} = this.props.data
    }

    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/myphoto.jpg" alt=""/>
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>我是{name}，目前任職於{occupation}</p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{name}</span><br/>
                  <span>{phone}</span><br/>
                  <span>{email}</span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href="https://www.cakeresume.com/resumes/Jim_Wu/draft?print=true" className="button"><i className="fa fa-download"></i>Download Resume</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
