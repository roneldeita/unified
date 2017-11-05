import React from 'react'
import '../assets/style/app.css'
import { NavLink, Route } from 'react-router-dom'

import ShowAbout from '../component/test/ShowAbout'

export default class About extends React.Component{
  constructor(props){
    super(props);
    this.state={ matchUrl:this.props.match.url }
  }

  render(){
    return(
      <div className="container App">
        <h1>This is the about page content</h1>
        <div>
          <h3>Pick a topic below</h3>
          <ul className="nav nav-pills">
            <li role="presentation">
              <NavLink to={`${this.state.matchUrl}/rendering`}>
                Rendering with React
              </NavLink>
            </li>
            <li role="presentation">
              <NavLink to={`${this.state.matchUrl}/components`}>
                Components
              </NavLink>
            </li>
            <li role="presentation">
              <NavLink to={`${this.state.matchUrl}/props-v-state`}>
                Props v. State
              </NavLink>
            </li>
          </ul>
        </div>
        <Route path="/about/:aboutID" component={ShowAbout} />
        <Route exact path={this.state.matchUrl} render={() => (
          <h3>Please select a topic.</h3>
        )}/>
      </div>
    )
  }
}
