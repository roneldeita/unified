import React from 'react'
import PAL from '../../assets/images/partners/PAL.png'
import Cebu_Pacific from '../../assets/images/partners/Cebu_Pacific.png'
import TwoGoTravel from '../../assets/images/partners/2GO_Travel.png'
import Air_Asia from '../../assets/images/partners/Air_Asia.png'
import Zest_Air from '../../assets/images/partners/Zest_Air.png'
import Cathay from '../../assets/images/partners/Cathay.png'
import SingaporeAirline from '../../assets/images/partners/Singapore_Airline.png'
import Qatar from '../../assets/images/partners/Qatar.png'
import Etihad from '../../assets/images/partners/Etihad.png'
import Emirates from '../../assets/images/partners/Emirates.png'
import Turkish from '../../assets/images/partners/Turkish.png'
import ANA from '../../assets/images/partners/ANA.png'
import Garuda from '../../assets/images/partners/Garuda.png'
import EvaAir from '../../assets/images/partners/Eva_Air.png'
import Lufthasna from '../../assets/images/partners/Lufthasna.png'
import Thai from '../../assets/images/partners/Thai.png'
import Au from '../../assets/images/partners/Au.png'
import JAL from '../../assets/images/partners/JAL.png'
import NewZealand from '../../assets/images/partners/New_Zealand.png'
import HananAL from '../../assets/images/partners/Hanan_AL.png'

export default class AirlinePartners extends React.Component{
  render(){
    const partnerIcons = {
      height:'35px',
      margin:'12px'
    };
    return(
      <div>
        <img src={PAL} alt="PAL" style={{width:130, margin:12}} />
        <img src={Cebu_Pacific} alt="Cebu_Pacific" style={{width:130, margin:12}} />
        <img src={TwoGoTravel} alt="TwoGoTravel" style={partnerIcons} />
        <img src={Air_Asia} alt="Air_Asia" style={partnerIcons} />
        <img src={Zest_Air} alt="Zest_Air" style={partnerIcons} />
        <br />
        <img src={Cathay} alt="Cathay" style={partnerIcons} />
        <img src={SingaporeAirline} alt="SingaporeAirline" style={partnerIcons} />
        <img src={Qatar} alt="Qatar" style={partnerIcons} />
        <img src={Etihad} alt="Etihad" style={partnerIcons} />
        <img src={Emirates} alt="Emirates" style={partnerIcons} />
        <br />
        <img src={Turkish} alt="Turkish" style={partnerIcons} />
        <img src={ANA} alt="ANA" style={{width:100, margin:12}} />
        <img src={Garuda} alt="Garuda" style={partnerIcons} />
        <img src={EvaAir} alt="EvaAir" style={{width:130, margin:12}} />
        <img src={Lufthasna} alt="Lufthasna" style={{width:130, margin:12}} />
        <br />
        <img src={Thai} alt="Thai" style={partnerIcons} />
        <img src={Au} alt="Au" style={{width:110, margin:12}}/>
        <img src={JAL} alt="JAL" style={{width:110, margin:12}} />
        <img src={NewZealand} alt="NewZealand" style={{width:110, margin:12}} />
        <img src={HananAL} alt="HananAL" style={{width:110, margin:12}}/>
      </div>
    )
  }
}
