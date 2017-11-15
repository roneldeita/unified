import React from 'react'
import BPI from '../../assets/images/partners/BPI.png'
import UCPB from '../../assets/images/partners/UCPB.png'
import BDO from '../../assets/images/partners/BDO.png'
import LandBank from '../../assets/images/partners/Landbank.png'
import Chinatrust from '../../assets/images/partners/Chinatrust.png'
import Globe from '../../assets/images/partners/Globe.png'
import Smart from '../../assets/images/partners/Smart.png'
import Skycable from '../../assets/images/partners/Skycable.png'
import Sun from '../../assets/images/partners/Sun.png'
import TNT from '../../assets/images/partners/TnT.png'
import Meralco from '../../assets/images/partners/Meralco.png'
import Maynilad from '../../assets/images/partners/Maynilad.png'
import ManilaWater from '../../assets/images/partners/Manila_Water.png'
import Iremit from '../../assets/images/partners/Iremit.png'
import Moneygram from '../../assets/images/partners/Moneygram.png'
import Transfast from '../../assets/images/partners/Transfast.png'
import Sunlife from '../../assets/images/partners/Sunlife.png'
import Manulife from '../../assets/images/partners/Manulife.png'
import Philam from '../../assets/images/partners/Philam.png'
import AXA from '../../assets/images/partners/Axa.png'

export default class PaymentPartners extends React.Component{
  render(){
    const partnerIcons = {
      height:'35px',
      margin:'12px'
    };
    return(
      <div>
        <img src={BPI} alt="BPI" style={partnerIcons} />
        <img src={UCPB} alt="UCPB" style={partnerIcons} />
        <img src={BDO} alt="BDO" style={{width:70, margin:12}} />
        <img src={LandBank} alt="LandBank" style={partnerIcons} />
        <img src={Chinatrust} alt="Chinatrust" style={partnerIcons} />
        <br />
        <img src={Globe} alt="Globe" style={partnerIcons} />
        <img src={Smart} alt="Smart" style={{width:100, margin:12}} />
        <img src={Skycable} alt="Skycable" style={{width:120, margin:12}} />
        <img src={Sun} alt="Sun" style={partnerIcons} />
        <img src={TNT} alt="TNT" style={partnerIcons} />
        <br />
        <img src={Meralco} alt="Meralco" style={partnerIcons} />
        <img src={Maynilad} alt="Maynilad" style={partnerIcons} />
        <img src={ManilaWater} alt="ManilaWater" style={partnerIcons} />
        <img src={Iremit} alt="Iremit" style={partnerIcons} />
        <img src={Moneygram} alt="Moneygram" style={partnerIcons} />
        <br />
        <img src={Transfast} alt="Transfast" style={partnerIcons} />
        <img src={Sunlife} alt="Sunlife" style={partnerIcons} />
        <img src={Manulife} alt="Manulife" style={{width:130, margin:12}} />
        <img src={Philam} alt="Philam" style={partnerIcons} />
        <img src={AXA} alt="AXA" style={partnerIcons} />
      </div>
    )
  }
}
