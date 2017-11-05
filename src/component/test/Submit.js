import React from 'react'

export default class Submit extends React.Component{

  constructor(props){
    super(props)
    this.state ={}
    this.submitButton = this.submitButton.bind(this)
  }

  submitButton(e){
    console.log(this.props);
    this.props.history.push('/');
    e.preventDefault();
  }

  render(){
    return(
      <div className="App">
        <form>
          <button onClick={this.submitButton} type="submit">Submit</button>
        </form>
      </div>
    )
  }
}
