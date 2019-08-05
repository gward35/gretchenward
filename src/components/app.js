import React from 'react';
import Nav from './nav';
import Introduction from './introduction';
import SiteGrid from './site-grid';
import '../css/style.css';

const App = () => {
  return (
    <div>
      <Nav />
      <main>
        <Introduction />
      </main>
    </div>
  )
}

export default App;
