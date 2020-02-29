import React from 'react'
import { Switch, Route, BrowserRouter, Redirect} from 'react-router-dom'
import Login from './views/login/Login'
import Admin from './views/admin/Admin'

import { setCookie, getCookie } from './utils/cookie'
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/login' component={Login}></Route>
        <Route path='/admin' component={Admin}></Route>
        <Redirect to='/admin'></Redirect>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
