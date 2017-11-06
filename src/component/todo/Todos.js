import React from 'react'
import { Route, Link } from 'react-router-dom'

import Todo from '../../component/todo/Todo'

export default class Todos extends React.Component{

  constructor(props){
    super(props);
    this.state={
      urgent:true,
      todo:'e.g., Walk the dog.',
      todoDesc:'You can add some description or notes about the activity',
      matchUrl:this.props.match.url
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleNewTodo = this.handleNewTodo.bind(this);
  }

  handleInputChange(e){
    const target = e.target;
    const name = target.name;
    const type = target.type;
    var value = null;
    switch(type){
      case "checkbox" : {
        value = target.checked;
        break;
      }
      default:
        value = target.value;
    };
    //console.log(value);
    this.setState({[name]:value});
  }

  handleNewTodo(e){
    console.log(this.state);
    e.preventDefault()
  }

  render(){
    //console.log(this.props)
    return(
      <div className="container">
        <form onSubmit={this.handleNewTodo}>
          <h1>New Todo</h1>
          <div className="checkbox">
              <label><input name="urgent" type="checkbox" checked={this.state.urgent} onChange={this.handleInputChange} />Urgent</label>
          </div>
          <div className="form-group">
            <label>Title:</label>
            <input type="text" name="todo" className="form-control" defaultValue={this.state.todo} onChange={this.handleInputChange} />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea type="text" name="todoDesc" className="form-control" defaultValue={this.state.todoDesc} onChange={this.handleInputChange} />
          </div>
          <button type="submit" className="btn btn-success">Add</button>
        </form>
        <Link to={`${this.state.matchUrl}/study`}>Study</Link>
        <Link to={`${this.state.matchUrl}/workout`}>Workout</Link>
        <Link to={`${this.state.matchUrl}/play`}>Play</Link>
        <Route path="/todos/:id" component={Todo} />
      </div>
    )
  }
}
