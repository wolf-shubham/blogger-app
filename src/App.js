import { BrowserRouter, Route, Switch } from 'react-router-dom'
import CreateBlog from "./Pages/CreateBlog";
import Home from "./Pages/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import SingleBlog from "./Pages/SingleBlog";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/blog/:id' component={SingleBlog} />
        <Route path='/createblog' component={CreateBlog} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
