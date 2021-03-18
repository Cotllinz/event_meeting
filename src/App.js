import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import homePage from "./pages/homePage";
import eventForm from "./pages/eventForm";
import dashboardMeeting from "./pages/dashboardMeeting";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={homePage} />
          <Route path="/addevent" component={eventForm} />
          <Route path="/Dashboard" component={dashboardMeeting} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
