import React from 'react'
import '../assets/style/app.css'

import Test from './test/Test.js'

export default class Home extends React.Component{
  constructor(props){
    super(props)
    this.state = { title :"Hello Homepage"}
  }

  changeTitle(title){
    //const title = e.target.value;
    this.setState({title})
  }

  render(){
    return(
      <div className="container App">
        <h1>{this.state.title}</h1>
        <Test changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
      </div>
    )
  }
}
