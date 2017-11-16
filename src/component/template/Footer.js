import React from 'react'
import '../../assets/style/footer.css'
import Facebook from '../../assets/images/social/Facebook.png'
import Instagram from '../../assets/images/social/Instagram.png'
import Youtube from '../../assets/images/social/Youtube.png'
import GooglePlus from '../../assets/images/social/GooglePlus.png'
import Logo from '../../assets/images/UPS_Logo.png'

export default class Footer extends React.Component{

  render(){
    return(
      <div className="footer container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-md-offset-1 col-md-10">
              <div>
                <ul className="nav nav-pills">
                  <li role="presentation"><a href="/">Help & Contact</a></li>
                  <li role="presentation"><a href="/">Apps</a></li>
                  <li role="presentation"><a href="/">Shop</a></li>
                  <li role="presentation"><a href="/">Fees</a></li>
                </ul>
              </div>
              <div>
                <hr/>
              </div>
              <div>
                <ul className="nav nav-pills">
                  <li role="presentation"><a href="/">About</a></li>
                  <li role="presentation"><a href="/">Products</a></li>
                  <li role="presentation"><a href="/">Services</a></li>
                  <li role="presentation"><a href="/">UPS Hubs</a></li>
                  <li role="presentation"><a href="/">FAQs</a></li>
                  <li role="presentation"><a href="/">Terms & Services</a></li>
                </ul>
              </div>
              <div className="pull-right">
                <img src={Facebook} alt="Facebook" className="social-logo" />
                <img src={Instagram} alt="Instagram" className="social-logo" />
                <img src={Youtube} alt="Youtube" className="social-logo" />
                <img src={GooglePlus} alt="GooglePlus" className="social-logo" />
              </div>
              <div style={{marginTop:15}}>
                <img src={Logo} alt="UPS_logo" className="logo" />
                <p style={{display:'inline', marginLeft:10}}> JR Bldg. 1520 Quezon Ave. South Triangle, Quezon City</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
