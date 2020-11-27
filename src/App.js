import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'


function App() {


  return (
    <>
      <Router>
        <Route exact path="/" component={MainPage}></Route>
      </Router>
    </>
  )

}

export default App;
