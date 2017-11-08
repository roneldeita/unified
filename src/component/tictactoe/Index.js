import React from 'react'
import '../../assets/style/tictactoe.css'

import Board from '../../component/tictactoe/Board'

class TicTacToe extends React.Component{
  render(){
    return(
      <div className="container">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    )
  }
}

export default TicTacToe;
