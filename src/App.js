import React, { Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'
import Search from './components/users/Search'
import About from './components/pages/About'
import Error from './/components/pages/Error'
import User from './components/users/User'
import './App.css'
import GithubState from './context/github/githubState'
import AlertState from './context/alert/AlertState'
import Alert from './components/layout/Alert'


const App = () => {

  // load all the users
  // async componentDidMount() {
  //   this.setState({ loading: true })
  //   const res = await axios.get(`https://api.github.com/users?client_id=$
  //   {process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
  //   {process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)

  //   this.setState({ users: res.data, loading: false })

  // }


  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <div className='container'>
              <Alert />
              <Switch>
                <Route exact path='/' render={prps => (
                  <Fragment>
                    <Search />
                    <Users />
                  </Fragment>
                )}
                />
                <Route exact path='/about' component={About} />
                <Route exact path='/user/:login' component={User} />
                <Route component={Error} />
              </Switch>

            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );

}


export default App;
