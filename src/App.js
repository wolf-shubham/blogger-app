import { useContext } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Context } from './context/Context';
import CreateBlog from "./Pages/CreateBlog/CreateBlog";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import SingleBlog from "./Pages/SingleBlog/SingleBlog";

function App() {
  const { user } = useContext(Context)
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/blog/:id' component={SingleBlog} />
        <Route path='/createblog' component={CreateBlog} />
        {/* <Route path='/login' component={user ? { Home } : Login} /> */}
        <Route path="/login">{user ? <Home /> : <Login />}</Route>
        <Route path="/register">{user ? <Home /> : <Register />}</Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
