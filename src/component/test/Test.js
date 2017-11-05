import React from 'react'

export default class Test extends React.Component{

  handleChange(e){
    const title = e.target.value;
    this.props.changeTitle(title)
  }

  render(){
    return(
      <div className="App">
        <input onChange={this.handleChange.bind(this)} value={this.props.title} />
      </div>
    )
  }
}
