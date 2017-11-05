import React from 'react'

export default class Todos extends React.Component{

  render(){
    console.log(this.props)
    return(
      <p>{this.props.match.params.id}</p>
    )
  }
}
