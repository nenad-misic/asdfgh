import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import Post from './Post/Post';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar></NavBar>
      
        <Route exact path='/' component={Post}/>
 
        
      </div>
    );
  }
}

export default App;