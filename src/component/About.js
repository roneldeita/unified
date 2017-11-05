import React from 'react'
import '../assets/style/app.css'

export default class About extends React.Component{

  handleChange(e){
    const title = e.target.value;
    this.props.changeTitle(title)
  }

  render(){
    return(
      <div className="container App">
        <h1>About Page</h1>
      </div>
    )
  }
}
