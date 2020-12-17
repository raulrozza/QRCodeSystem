import React from 'react'

import './app.css'

/// import MainBanner from './components/BannerTitle'
import PriceCard from './components/PriceCard'

function App () {
  return (
    <div className="content">

      <div className="wrapper">
        <h1 className="title">Bem vindo a nossa Loja</h1>

      </div>

      <div className="card">
        <PriceCard/>
        <p >Use seu celular para saber o preço do produto com desconto</p>
      </div>

    </div>

  )
}

export default App
