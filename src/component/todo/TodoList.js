import React from 'react'

export default class LoadTodos extends React.Component{

  render(){
    //console.log(this.props)
    return(
      <div className="list-group">
      {
        this.props.todos.map((todo) =>
          <div className="list-group-item" key={todo.id}>
            <span className="pull-right"><li className={`fa ${todo.urgent ? 'fa-check text-success' : 'fa-remove text-danger'}`}></li> Urgent</span>
            <h4 className="list-group-item-heading">{todo.title}</h4>
            <p className="list-group-item-text">{todo.todoDesc}</p>
            <li className="fa fa-trash" onClick={this.props.handleRemove} data-id={todo.id}></li>
          </div>
        )
      }
      </div>
    )
  }
}
