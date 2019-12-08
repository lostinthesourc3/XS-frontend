import React from 'react';
import { Route, Switch } from 'react-router-dom'
import PostsContainer from './containers/PostsContainer'


function App() {
  return (
    <div className="App">
      {/* <Menu /> */}
      <Switch>
        {/* about */}
        <Route exact path = "/blog" component = {PostsContainer}/>
        {/* contact */}
      </Switch>
    </div>
  );
}

export default App;
