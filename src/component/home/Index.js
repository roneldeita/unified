import React from 'react'
import '../../assets/style/home.css'
import Icon1 from '../../assets/images/Payments.png'
import Icon2 from '../../assets/images/Business.png'
import Icon3 from '../../assets/images/Cashless.png'
import Bpi from '../../assets/images/partners/BPI.png'

export default class Index extends React.Component{

  render(){
    const partnerIcons = {
      height:'30px'
    };

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
              <div className="col-sm-12 col-md-5 cover-vid" style={{padding:0}}>
                <iframe width="400" height="227" title="Unified Video" className="pull-right" src="https://www.youtube.com/embed/4Zqjtqntx8Q?controls=0" frameBorder="0" gesture="media" allowFullScreen></iframe>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid" style={{backgroundColor:"#FFFFFF", color:"#1F354F"}}>
          <div className="container" style={{marginTop:60, marginBottom:60}}>
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 style={{marginBottom:70}}><b>Why use Unified?</b></h1>
              </div>
              <div className="col-md-offset-1 col-md-10 text-center">
                <div className="row">
                  <div className=" col-md-4">
                    <img alt="icon 1" src={Icon1} className="icon" />
                    <h4 style={{marginTop:20, marginBottom:20}}><b>You can pay derictly anywhere</b></h4>
                    <p>
                      Access a global set of users and customers.<br />
                      Ups is available locally and internationally.
                    </p>
                  </div>
                  <div className="col-md-4">
                    <img alt="icon 2" src={Icon2} className="icon" />
                    <h4 style={{marginTop:20, marginBottom:20}}><b>Trusted business nationwide</b></h4>
                    <p>
                      With over 300,000 daily active users<br />
                      choose and and trust Unified.
                    </p>
                  </div>
                  <div className="col-md-4">
                    <img alt="icon 3" src={Icon3} className="icon" />
                    <h4 style={{marginTop:20, marginBottom:20}}><b>Cashless payments</b></h4>
                    <p>
                      You can get paid directly of your services<br />
                      without using any physical money.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid" style={{color:"#1F354F"}}>
          <div className="container" style={{marginTop:60, marginBottom:60}}>
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 style={{marginBottom:70}}><b>From booking online to sending payments,<br /> we got everything.</b></h1>
              </div>
              <div className="col-md-offset-1 col-md-10 text-center">
                <div className="row">
                  <div className="col-md-3 text-left">
                    <h4><b>Payment Partners</b></h4><br />
                    <p>We are partnering with the most trusted bills payment and remmitance service providersensure every transaction is fast, smooth and hastle free.</p>
                  </div>
                  <div className="col-md-9">
                    <img src={Bpi} alt="BPI" style={partnerIcons} />
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
