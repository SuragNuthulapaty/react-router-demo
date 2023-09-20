import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ProfilePage } from "./components/ProfilePage";
import { FeedPage } from "./components/FeedPage";
import { AgePage } from "./components/HomePage";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={AgePage} />
          <Route 
            exact path="/profile"
            render={(props) => <ProfilePage {...props}/>}
          />
          <Route path="/info" component={FeedPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
