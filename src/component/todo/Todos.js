import React from 'react'
import { Route, Link } from 'react-router-dom'

import Todo from '../../component/todo/Todo'

export default class Todos extends React.Component{

  constructor(props){
    super(props);
    this.state={ matchUrl:this.props.match.url }
  }

  render(){
    console.log(this.props)
    return(
      <div>
        <Link to={`${this.state.matchUrl}/study`}>Study</Link>
        <Link to={`${this.state.matchUrl}/workout`}>Workout</Link>
        <Link to={`${this.state.matchUrl}/play`}>Play</Link>
        <Route path="/todos/:id" component={Todo} />
      </div>
    )
  }
}
