import {React, useState} from 'react'
import Search from './components/Search'

const App = () => {
  const [searchTerm, setSearchTerm] = useState("I am batman");
  return (
    <main>
      <div className='pattern'/>
      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="hero-image"/>
          <h1>Find <span className='text-gradient'>Movies</span> that You'll Enjoy Without hassle</h1>
        </header>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      </div>
    </main>
  )
}

export default App
