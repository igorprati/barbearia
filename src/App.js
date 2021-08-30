import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register"
import User from "./Pages/User/User";
import Admin from "./Pages/Admin/Admin";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Login} exact={true} ></Route>
        <Route path='/register' component={Register}></Route>
        <Route path='/user' component={User}></Route>
        <Route path='/admin' component={Admin}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
