import React from 'react'
import { Route, Link } from 'react-router-dom'

import Todo from '../../component/todo/Todo'
import TodosList from '../../component/todo/TodoList'


export default class Todos extends React.Component{

  constructor(props){
    super(props);
    this.state= {
      urgent:true,
      title:'e.g., Walk the dog.',
      todoDesc:'You can add some description or notes about the activity',
      todos:[
        {id:'qwsdft12qw', urgent:true, title:'todo 1', todoDesc:'todo description 1'},
        {id:'sasnhgqec5', urgent:false, title:'todo 2', todoDesc:'todo description 2'}
      ],
      matchUrl:this.props.match.url
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleNewTodo = this.handleNewTodo.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
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
    this.setState({[name]:value});
  }

  handleNewTodo(e){
    let newTodo = {};
    newTodo.id = new Array(10).join().replace(/(.|$)/g, function(){return ((Math.random()*36)|0).toString(36);})
    newTodo.urgent = this.state.urgent;
    newTodo.title = this.state.title;
    newTodo.todoDesc = this.state.todoDesc;
    this.setState({todos:this.state.todos.concat(newTodo)});
    e.preventDefault()
  }

  handleRemove(event){
    var todoId = event.target.getAttribute('data-id');

    let clone = [];
    this.state.todos.forEach(function(item, key){
      if(item.id !== todoId){
        clone.push(item);
      }
    });
    this.setState({todos:clone});
  }

  render(){
    return(
      <div className="container">
        <form onSubmit={this.handleNewTodo}>
          <h1>New Todo</h1>
          <div className="checkbox">
              <label><input name="urgent" type="checkbox" checked={this.state.urgent} onChange={this.handleInputChange} />Urgent</label>
          </div>
          <div className="form-group">
            <label>Title:</label>
            <input type="text" name="title" className="form-control" defaultValue={this.state.title} onChange={this.handleInputChange} />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea type="text" name="todoDesc" className="form-control" defaultValue={this.state.todoDesc} onChange={this.handleInputChange} />
          </div>
          <button type="submit" className="btn btn-success">Add</button>
        </form><br />
        <TodosList todos={this.state.todos} url={this.state.matchUrl} handleRemove={this.handleRemove}/>
        <Link to={`${this.state.matchUrl}/test`}>Test Content</Link>
        <Route path="/todos/:id" component={Todo} />
      </div>
    )
  }
}
