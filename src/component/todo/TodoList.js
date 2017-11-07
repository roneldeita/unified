import React from 'react'
import { Link } from 'react-router-dom'

export default class LoadTodos extends React.Component{
  render(){
    //console.log(this.props)
    return(
      <div className="list-group">
      {
        this.props.todos.map((todo) =>
          <div className="list-group-item" key={todo.id}>
            <span className="pull-right"><li className={`fa ${todo.urgent ? 'fa-check' : 'fa-remove'}`}></li> Urgent</span>
            <h4 className="list-group-item-heading">{todo.title}</h4>
            <p className="list-group-item-text">{todo.todoDesc}</p>
            <a className="btn btn-link"><li className="fa fa-trash"></li> Remove</a>
          </div>
        )
      }
      </div>
    )
  }
}
