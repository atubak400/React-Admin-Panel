import Topbar from './Components/topbar/Topbar'
import Sidebar from './Components/sidebar/Sidebar'
import './app.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import UserList from './pages/UserList/UserList'
import Home from '../src/pages/home/Home'

function App() {
  return (
    <Router>
      <Topbar />
      <div className='container'>
        <Sidebar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/users'>
            <UserList />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
