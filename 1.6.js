import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    return (
        <div>
            <h1>Anna palautetta</h1>
        
        <button onClick={Hyva.kasvata.bind(Hyva)}>
        Hyvä
        </button>
        <button onClick={Neutraali.kasvata.bind(Neutraali)}>
        Neutraali
        </button>
        <button onClick={Huono.kasvata.bind(Huono)}>
        Huono
        </button>
        <h1>Statistiikka</h1>
        <p>Hyvä: {Hyva.value} </p>
        <p>Neutraali: {Neutraali.value}</p>
        <p>Huono: {Huono.value}</p>
      </div>
    )
}

const Hyva = {
    value: 0,
    kasvata: function() {
        this.value = this.value + 1
        renderoi()
      }
}

const Neutraali = {
    value: 0,
    kasvata: function() {
        this.value = this.value + 1
        renderoi()
      }   
}

const Huono = {
    value: 0,
    kasvata: function() {
        this.value = this.value + 1
        renderoi()
      }  
}

  const renderoi = () => {
    ReactDOM.render(<App />, document.getElementById('root'))
  }

ReactDOM.render(<App />, document.getElementById('root'))
  
  
  