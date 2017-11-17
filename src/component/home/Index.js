import React from 'react'
import '../../assets/style/home.css'
import Icon1 from '../../assets/images/Payments.png'
import Icon2 from '../../assets/images/Business.png'
import Icon3 from '../../assets/images/Cashless.png'
import PaymentPartners from '../../component/home/PaymentPartners'
import AirlinePartners from '../../component/home/AirlinePartners'
import IATA from '../../assets/images/partners/IATA.png'
import IpadBentanayan from '../../assets/images/bentanayan/Ipad_Bentanayan.png'
import BentanayanLogo from '../../assets/images/bentanayan/Bentanayan_logo_white.png'

export default class Index extends React.Component{

  render(){
    const hr = {
      borderTop: 2,
      borderStyle: 'solid',
      borderColor: '#dddddd'
    }
    return(
      <div className="home">
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
                  <a href="/" className="btn btn-transparent-circular">Learn More</a>
              </div>
              <div className="col-sm-12 col-md-5 cover-vid" style={{padding:0}}>
                <iframe width="400" height="227" title="Unified Video" className="pull-right" src="https://www.youtube.com/embed/4Zqjtqntx8Q?controls=0" frameBorder="0" gesture="media" allowFullScreen></iframe>
              </div>
            </div>
          </div>
        </div>
        <div className="container" style={{marginTop:60, marginBottom:60}}>
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 style={{marginBottom:70}}>Why use Unified?</h1>
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
        <div className="container" style={{marginTop:60, marginBottom:60}}>
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 style={{marginBottom:70}}>From booking online to sending payments,<br /> we got everything.</h1>
            </div>
            <div className="col-md-offset-1 col-md-10 text-center">
              <div className="row">
                <div className="col-md-3 text-left">
                  <h4><b>Payment Partners</b></h4><br />
                  <p>We are partnering with the most trusted bills payment and remmitance service providersensure every transaction is fast, smooth and hastle free.</p>
                </div>
                <div className="col-md-9">
                  <PaymentPartners></PaymentPartners>
                </div>
              </div>
            </div>
          </div>
          <div className="row" style={{marginTop:60, marginBottom:60}}>
            <div className="col-md-offset-1 col-md-10 text-center"><hr style={hr} /></div>
          </div>
          <div className="row" style={{marginBottom:180}}>
            <div className="col-md-offset-1 col-md-10 text-center">
              <div className="row">
                <div className="col-md-3">
                  <h4 className="text-left"><b>Airline Partners</b></h4><br />
                  <p className="text-left">Domistic and International partners. We are credited partners with more than 300 plus airlines accross the globe to get you to wherever you need to be.</p>
                  <img className="text-center" src={IATA} alt="IATA" style={{width:180}} />
                </div>
                <div className="col-md-9">
                  <AirlinePartners></AirlinePartners>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid" style={{backgroundColor:'#002b80'}}>
          <div className="container" style={{marginBottom:80}}>
            <div className="row">
              <div className="col-md-12">
                <img src={IpadBentanayan} alt="IpadBentanayan" className="img-responsive center-block" style={{width:550, marginTop:-130, marginBottom:50}} />
              </div>
              <div className="col-md-offset-1 col-md-10 text-center">
                <div className="row">
                  <div className="col-md-6 text-left" style={{color:'#ffffff'}}>
                    <h1>Shop online endlessly.</h1>
                    <h1>Sell your product</h1>
                    <h1>securely.</h1>
                  </div>
                  <div className="col-md-6">
                    <img className="img-responsive center-block" src={BentanayanLogo} alt="Bentanayan-logo" style={{width:400}} />
                    <a href="https://bentanayan.com" rel="noopener noreferrer" target="_blank" className="btn btn-transparent-circular">Go to bentanayan.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container" style={{marginTop:120, marginBottom:120}}>
          <div className="col-md-12 text-center">
            <h1>Interested in Unified Products and Services?</h1><br/><br/>
            <a href="/" className="btn btn-blue-circular"><h3>See Unified Packages Now!</h3></a>
          </div>
        </div>
      </div>
    )
  }
}
