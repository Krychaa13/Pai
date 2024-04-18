import React from 'react'
import './App.css'
import Header from './container/Header/Header'
import Footer from './container/Footer/Footer'
import Main from './container/Main/Main'

function App() {
  return (
    <div className="App-container">
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;