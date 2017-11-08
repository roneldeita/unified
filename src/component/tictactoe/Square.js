import React from 'react'

import '../../assets/style/tictactoe.css'

class Square extends React.Component{
  handleClick(e){
    this.props.onClick();
  }
  render(){
    //console.log(this.props)
    return (
      <button className="square" onClick={this.handleClick.bind(this)}>{this.props.value}</button>
    )
  }
}

export default Square;
