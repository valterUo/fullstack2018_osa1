import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    return (
        <div align="center">
            <h1>Anna palautetta</h1>
            <Button name = "Hyvä" funktio = {Hyva.kasvata.bind(Hyva)}/>
            <Button name = "Neutraali" funktio = {Neutraali.kasvata.bind(Neutraali)}/>
            <Button name = "Huono" funktio = {Huono.kasvata.bind(Huono)}/>
            <Statistics value1 = {Hyva.value} value2 = {Neutraali.value} value3 = {Huono.value}/>
            <Keskiarvo value1 = {Hyva.value} value2 = {Neutraali.value} value3 = {Huono.value}/>
            <Statistic value1 = {Hyva.value} value2 = {Neutraali.value} value3 = {Huono.value}/>
      </div>
    )
}

const Button = (props) => {
    return (
    <button onClick={props.funktio}>
        {props.name}
        </button>
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
    return (
        <div>
            <h1>Statistiikka</h1>
            <p>Hyvä: {props.value1} </p>
            <p>Neutraali: {props.value2}</p>
            <p>Huono: {props.value3}</p>
            </div>
    )
}

const Statistic = (props) => {
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

    if (props.value1 === 0 && props.value3 === 0) {
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
  
  
  