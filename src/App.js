import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Nav from './components/nav'
import Home from './pages/home'
import Work from './pages/work'
import './css/style.css'
import { CSSTransition } from 'react-transition-group'

const routes = [
  { path: '/', Component: Home },
  { path: '/work', Component: Work },
]

const App = () => {
  return (
    <Router>
      <div className="App">
        <Nav />
        <main>
          {routes.map(({ path, Component }) => (
            <Route key={path} exact path={path}>
              {({ match }) => (
                <CSSTransition
                  in={match !== null}
                  classNames="fade"
                  timeout={300}
                  unmountOnExit
                >
                  <Component />
                </CSSTransition>
              )}
            </Route>
          ))}
        </main>
      </div>
    </Router>
  )
}

export default App
