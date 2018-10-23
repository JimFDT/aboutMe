import React, {Component} from 'react'

class Resume extends Component {
  render() {
    if (this.props.data) {
      const data = this.props.data
      var school1 = data.education[0].school,
       school2 = data.education[1].school,
       degree1 = data.education[0].degree,
       degree2 = data.education[1].degree,
       graduated1 = data.education[0].graduated,
       graduated2 = data.education[1].graduated,
       company1 = data.work[0].company,
       company2 = data.work[1].company,
       title1 = data.work[0].title,
       title2 = data.work[1].title,
       years1 = data.work[0].years,
       years2 = data.work[1].years,
       description1 = data.work[0].description,
       description2 = data.work[1].description,
       name1 = data.skills[0].name,
       name2 = data.skills[1].name,
       name3 = data.skills[2].name,
       name4 = data.skills[3].name,
       name5 = data.skills[4].name,
       name6 = data.skills[5].name
      // var description2 = work.description.replace('<br/>', '\n')
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
