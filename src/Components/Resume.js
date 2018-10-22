import React, {Component} from 'react';

class Resume extends Component {
  render() {
    if (this.props.data) {
      var data = this.props.data
      // let jsonData = this.props.data
      // console.log('jsonData:: ', jsonData)
      // let work = JSON.stringify(jsonData.work[1])
      // console.log('work ', work)
      var school1 = this.props.data.education[0].school;
      var school2 = this.props.data.education[1].school;
      var degree1 = this.props.data.education[0].degree;
      var degree2 = this.props.data.education[1].degree;
      var graduated1 = this.props.data.education[0].graduated;
      var graduated2 = this.props.data.education[1].graduated;
      var company1 = this.props.data.work[0].company;
      var company2 = this.props.data.work[1].company;
      var title1 = this.props.data.work[0].title;
      var title2 = this.props.data.work[1].title;
      var years1 = this.props.data.work[0].years;
      var years2 = this.props.data.work[1].years;
      var description1 = this.props.data.work[0].description;
      var description2 = this.props.data.work[1].description
      // var description2 = work.description.replace('<br/>', '\n')
      var name1 = this.props.data.skills[0].name;
      var name2 = this.props.data.skills[1].name;
      var name3 = this.props.data.skills[2].name;
      var name4 = this.props.data.skills[3].name;
      var name5 = this.props.data.skills[4].name;
      var name6 = this.props.data.skills[5].name;
    }

    return (
      <section id="resume">
        <div className="row skill">
          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>
          <div className="nine columns main-col">
            <p>
              持續精進前/後端網站技術，期望寫出一個好用又漂亮的網站！
            </p>
            <div className="bars">
              <ul className="skills">
                <li><span className="bar-expand photoshop"></span><em>{name1}</em></li>
                <li><span className="bar-expand illustrator"></span><em>{name2}</em></li>
                <li><span className="bar-expand wordpress"></span><em>{name3}</em></li>
                <li><span className="bar-expand css"></span><em>{name4}</em></li>
                <li><span className="bar-expand html5"></span><em>{name5}</em></li>
                <li><span className="bar-expand jquery"></span><em>{name6}</em></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Work</span></h1> 
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>{company1}</h3>
                <p className="info">{title1}<span>&bull;</span> <em className="date">{years1}</em></p>
                <p>{description1}</p>
              </div>
            </div>

            <div className="row item">
              <div className="twelve columns">
                <h3>{company2}</h3>
                <p className="info">{title2}<span>&bull;</span> <em className="date">{years2}</em></p>
                <p>{description2}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>{school1}</h3>
                <p className="info">{degree1}<span>&bull;</span> <em className="date">{graduated1}</em></p>
                <p>

                </p>
              </div>
            </div>

            <div className="row item">
              <div className="twelve columns">
                <h3>{school2}</h3>
                <p className="info">{degree2}<span>&bull;</span> <em className="date">{graduated2}</em></p>
                <p>

                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
