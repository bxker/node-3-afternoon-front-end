import React from 'react';
import './reset.css'
import './App.css';
import routes from './routes'

//import components
import Nav from './components/Nav'

function App() {
  return (
    <div className="App">
      <Nav />
      {routes}
    </div>
  );
}

export default App;
