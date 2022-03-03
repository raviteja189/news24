
import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


export default class App extends Component {
  Apikey='f42e576f3c0545d6811e2e6bfd56032d'
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">             <News key="technology"   Apikey={this.Apikey} country="in" category="technology" /></Route>
            <Route exact path="/business">     <News key="business"     Apikey={this.Apikey} country="in" category="business" /></Route>
            <Route exact path="/entertainment"><News key="entertainment"Apikey={this.Apikey} country="in" category="entertainment" /></Route>
            <Route exact path="/general">      <News key="general"      Apikey={this.Apikey} country="in" category="general" /></Route>
            <Route exact path="/health">       <News key="health"       Apikey={this.Apikey} country="in" category="health" /></Route>
            <Route exact path="/science">      <News key="science"      Apikey={this.Apikey} country="in" category="science" /></Route>
            <Route exact path="/sports">       <News key="sports"       Apikey={this.Apikey} country="in" category="sports" /></Route>
            <Route exact path="/technology">   <News key="technology"   Apikey={this.Apikey} country="in" category="technology" /></Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

