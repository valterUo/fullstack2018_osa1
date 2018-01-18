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
        <Keskiarvo value1 = {Hyva.value} value2 = {Neutraali.value} value3 = {Huono.value}/>
        <Statistics value1 = {Hyva.value} value2 = {Neutraali.value} value3 = {Huono.value}/>
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

const Statistics = (props) => {
    if (props.value1 === 0) {
       return (
        <div>
            <p>Positiivisia: 0 % </p>
        </div>
       ) 
    }
    return (
        <div>
            <p>Positiivisia: {props.value1 / (props.value1 + props.value2 + props.value3)} </p>
       </div>
        
    )
}

const Keskiarvo = (props) => {
    const total = props.value1 + props.value2 + props.value3
    const arvo = props.value1 - props.value3
    const suhde = arvo / total

    if (props.value1 === 0) {
        return (
         <div>
             <p>Keskiarvo: 0 </p>
         </div>
        ) 
     }

    return (
        <div>
            <p>Keskiarvo: {suhde} </p>
        </div>
    )
}

  const renderoi = () => {
    ReactDOM.render(<App />, document.getElementById('root'))
  }

ReactDOM.render(<App />, document.getElementById('root'))
  
  
  