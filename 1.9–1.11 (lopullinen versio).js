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
    if(Hyva.value === 0 && Neutraali.value === 0 && Huono.value === 0) {
        return (
        <div>
        <h1>Statistiikka</h1>
            <p>Yhtään palautetta ei ole annettu.</p>
            </div>
        )
    }
    return (
        <div>
            <h1>Statistiikka</h1>
            <table>
                <tbody>
                <tr> 
                    <td>Hyvä:</td> 
                    <td>{props.value1}</td> 
                </tr>
                <tr>
                    <td>Neutraali:</td> 
                    <td>{props.value2}</td>
                </tr>
                <tr>
                    <td>Huono:</td>
                    <td> {props.value3}</td>
                </tr> 
            <Keskiarvo value1 = {props.value1} value2 = {props.value2} value3 = {props.value3}/>
            <Statistic value1 = {props.value1} value2 = {props.value2} value3 = {props.value3}/>
            </tbody>
            </table>
            </div>
    )
}

const Statistic = (props) => {
    if(Hyva.value === 0 && Neutraali.value === 0 && Huono.value === 0) {
        return (
        <div>
        </div>
        )
    }
    if (props.value1 === 0 && (Neutraali.value !== 0 || Huono.value !== 0)) {
       return (
        <tr>
            <td>Positiivisia:</td>
            <td> 0 % </td>
        </tr>
       ) 
    }
    return (
        <tr>
            <td>Positiivisia: </td>
            <td> {((props.value1 / (props.value1 + props.value2 + props.value3))*100).toFixed(1)} % </td>
        </tr>
        
    )
}

const Keskiarvo = (props) => {
    const total = props.value1 + props.value2 + props.value3
    const arvo = props.value1 - props.value3
    const suhde = (arvo / total).toFixed(2)

    if(Hyva.value === 0 && Neutraali.value === 0 && Huono.value === 0) {
        return (
        <div>
        </div>
        )
    }

    if (props.value1 === 0 && props.value3 === 0 && Huono.value !== 0) {
        return (
            <tr>
             <td>Keskiarvo:</td>
             <td> 0 </td>
            </tr>
        ) 
     }

    return (
        <tr>
            <td>Keskiarvo:</td>
            <td> {suhde} </td>
        </tr>
    )
}

  const renderoi = () => {
    ReactDOM.render(<App />, document.getElementById('root'))
  }

ReactDOM.render(<App />, document.getElementById('root'))
  
  
  