import React from 'react';
import { Route, Switch } from 'react-router-dom'
import PostsContainer from './containers/PostsContainer'
import ContactContainer from './containers/ContactContainer'
import Menu from './containers/Menu'


function App() {
  return (
    <div className="App">
      <Menu />
      <Switch>
        {/* about */}
        <Route exact path = "/blog" component = {PostsContainer}/>
        <Route exact path = "/contact" component = {ContactContainer}/>
      </Switch>
    </div>
  );
}

export default App;
