import React from 'react'
import '../../assets/style/productsandservices.css'
import Global from '../../assets/images/Global_Dealer_Icon-01.png'
import Local from '../../assets/images/Pinoy_Dealer_Icon-01.png'

export default class Index extends React.Component{
  render(){
    return(
      <div className="producs-and-services">
        <div className="container-fluid cover-container">
          <div className="container cover">
            <div className="row">
              <div className="col-md-offset-1 col-md-10">
                <p className="slogan">The customer experience  is<br />
                  the next competitive battleground.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container" style={{marginTop:60, marginBottom:60}}>
          <h1 className="text-center"><b>Exclusive package deals for you</b></h1><br/><br/><br/>
          <div className="row text-center">
            <div className="col-md-offset-1 col-md-4">
              <img src={Global} alt="Global dealer icon" className="dealer-icon" />
              <h2><b>Global Dealer Package</b></h2>
              <h3 className="txt-u-lb"><b>Php 14,998</b></h3><br/><br/>
              <a href="/" className="btn btn-blue-circular"><p>See Details</p></a>
            </div>
            <div className="col-md-offset-2 col-md-4">
            <img src={Local} alt="Local dealer icon" className="dealer-icon" />
              <h2><b>Pinoy Dealer Package</b></h2>
              <h3 className="txt-u-lb"><b>Php 7,998</b></h3><br/><br/>
              <a href="/" className="btn btn-blue-circular"><p>See Details</p></a>
            </div>
            <div className="col-md-offset-1 col-md-10 text-left">
              <br/><br/>
              <p><b><i>Note: Insurance Coverage is good only for one-time coverage. In case of multiple heads, multiple coverage is Not allowed. Should the dealer is already insured, he/she maybe opt to insure other relatives (within the 4th degree by consanguinity or affinity) or sell the insurance coverage.</i></b></p>
            </div>
          </div>
        </div>
        <div className="container-fluid bills-payment-cover">
          <div className="container cover">
            <div className="row">
              <div className="col-md-offset-1 col-md-10 text-right">
                <h1 clasName="title"><b>Bills Payment</b></h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
