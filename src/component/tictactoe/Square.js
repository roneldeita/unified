import React from 'react'

import '../../assets/style/tictactoe.css'

class Square extends React.Component{
  render(){
    console.log(this.props)
    return (
      <button className="square" onClick={() => this.props.onClick()}>{this.props.value}</button>
    )
  }
}

export default Square;
