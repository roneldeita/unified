import React from 'react'
import '../../assets/style/home.css'
import Icon1 from '../../assets/images/icon1.png'
import Icon2 from '../../assets/images/icon2.png'
import Icon3 from '../../assets/images/icon3.png'

export default class Index extends React.Component{
  render(){
    return(
      <div>
        <div className="container-fluid cover-container">
          <div className="container cover">
            <div className="row">
              <div className="col-md-offset-1 col-md-5">
                <p className="slogan">We empower you to attain <br />
                  financial freedom and <br />
                  economic stability.</p>
                  <br />
                  <p className="slogan-sub">
                  UPS offers services that you cannot avail from anyone else.<br />
                  With Unified Producs and Services you can buy load,<br />
                  pay your bills, book flights online, shopping all day<br />
                  and send and receive money anywhere in the world.<br />
                  All from your mobile phone!
                  </p>
                  <br />
                  <a href="/" className="btn btn-learn-more">Learn More</a>
              </div>
              <div className="col-sm-12 col-md-5 cover-vid">
                <iframe width="400" height="227" title="Unified Video" className="pull-right" src="https://www.youtube.com/embed/4Zqjtqntx8Q?controls=0" frameBorder="0" gesture="media" allowFullScreen></iframe>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid" style={{backgroundColor:"#ebf2fa"}}>
          <div className="container" style={{marginTop:60, marginBottom:60}}>
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 style={{marginBottom:70}}><b>Why use Unified?</b></h1>
              </div>
              <div className="col-md-offset-1 col-md-10 text-center">
                <div className="row">
                  <div className=" col-md-4">
                    <img alt="icon 1" src={Icon1} className="icon" />
                    <h4>You can pay derictly anywhere</h4>
                  </div>
                  <div className="col-md-4">
                    <img alt="icon 2" src={Icon2} className="icon" />
                    <h4>Trusted business nationwide</h4>
                  </div>
                  <div className="col-md-4">
                    <img alt="icon 3" src={Icon3} className="icon" />
                    <h4>Cashless payments</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
