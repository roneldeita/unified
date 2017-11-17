import React from 'react'
import '../../assets/style/about.css'
import Logo from '../../assets/images/UPS_Logo.png'

export default class About extends React.Component{
  render(){
    return(
      <div className="about">
        <div className="container-fluid cover-container">
          <div className="container cover">
            <div className="row">
              <div className="col-md-offset-1 col-md-10 text-right">
                <p className="slogan">Global Business for <br />
                  Global Community
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container" style={{marginTop:60, marginBottom:60}}>
          <div className="row">
            <div className="col-md-offset-1 col-md-10 text-right">
              <p className="title text-center">Our history</p>
              <br />
              <p className="history">
                Unified Products and Services, Inc., or UPS for brevity, was established 2011. The company was initially formed as the marketing arm of a particular company. With the phenomenal growth of the company and its proven expertise in multi-level marketing, Unified Products and Services shifted to be an independent Multi-Level Marketing Company, that caters not only traditional products but also technology-based services, such as e-Cash, ticketing, bills payments and universal loading. Unified Products and Services, Inc., offers various dealership packages and franchise that will empower global communities towards attaining financial freedom and economic stability. Unified Products and Services, Inc., exists with the paramount purpose of providing business opportunities to everyone through our world-class quality products and services and breaking the stigma on multi-level marketing by developing professional and globally-competitive multi-level marketing leaders. The company enshrined in its helm the tenets of Unity, People Oriented, and Service & Products Excellence.
              </p>
            </div>
          </div>
        </div>
        <div className="container-fluid text-center" style={{backgroundColor:'#002b80', color:'#FFFFFF'}}>
          <div className="container" style={{marginBottom:50, marginTop:50}}>
            <div className="row">
              <div className="col-md-offset-2 col-md-3">
                <h3>Vision</h3>
                <p>To be the world-class leader in Multi-Level Marketing industry empowering the global community in attaining financial freedom and economic stability.</p>
              </div>
              <div className="col-md-offset-2 col-md-3">
                <h3>Mission</h3>
                <p>To provide business opportunities to individuals through our world-class quality products and services. <br/><br/>To develop professional multi-level marketing leaders who will spearhead an innovative marketing plans.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container" style={{marginTop:60, marginBottom:60}}>
          <div className="row">
            <div className="col-md-offset-1 col-md-10 text-center">
              <p className="title">Values</p>
              <br />
              <h3><b>Service & Product Excellence</b></h3>
              <h3><b>People Oriented</b></h3>
              <h3><b>Unity</b></h3>
            </div>
          </div>
        </div>
        <div className="container" style={{marginTop:60, marginBottom:60}}>
          <div className="row">
            <div className="col-md-offset-1 col-md-10 text-center">
              <p className="title">UPS Team</p>
              <br />
              <br />
              <br />
              <div className="row text-center">
                <div className="col-md-4">
                  <img src={Logo} className="img-responsive img-circle" alt="logo" />
                  <h3><b>Emmanuel Pascual</b></h3>
                  <h4><b>Founder & CEO</b></h4>
                </div>
                <div className="col-md-4">
                  <img src={Logo} className="img-responsive img-circle" alt="logo" />
                  <h3><b>Farrah Pascual</b></h3>
                  <h4><b>Finance</b></h4>
                </div>
                <div className="col-md-4">
                  <img src={Logo} className="img-responsive img-circle" alt="logo" />
                  <h3><b>Lea Dimaculangan</b></h3>
                  <h4><b>Operations Manager</b></h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
