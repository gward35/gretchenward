import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Nav from './components/nav'
import Home from './components/pages/home'
import Work from './components/pages/work'
import { withToastProvider } from './components/Toast'
import './css/style.css'

const App = () => {
  return (
    <Router>
      <div className="App">
        <Nav />
        <main>
          <Route exact path="/" component={Home} />
          <Route path="/work" component={Work} />
        </main>
      </div>
    </Router>
  )
}

const AppWithToastProvider = withToastProvider(App)

export default AppWithToastProvider
