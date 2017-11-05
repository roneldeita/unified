import React from 'react'

export default class ShowAbout extends React.Component{

  render(){
    console.log(this.props)
    return(
      <div>
        <p>{this.props.match.params.aboutID}</p>
      </div>
    )
  }
}
