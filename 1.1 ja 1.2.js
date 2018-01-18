import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => {
    return (
        <div>
            <h1>{props.otsikko}</h1>
        </div>
    )
}

const Sisalto = (props) => {
    return (
        <div>
            <Osa sisalto={props.osaa1} tehtavia={props.tehtaviaa1}/>
            <Osa sisalto={props.osaa2} tehtavia={props.tehtaviaa2}/>
            <Osa sisalto={props.osaa3} tehtavia={props.tehtaviaa3}/>
        </div>
    )
}

const Yhteensa = (props) => {
    return (
        <div>
            <p>yhteensa {props.tehtavat} tehtävää</p>
        </div>
    )
}

const Osa = (props) => {
    return (
        <div>
            <p>{props.sisalto} {props.tehtavia}</p>
        </div>
    )
}

const App = () => {
  const kurssi = 'Half Stack -sovelluskehitys'
  const osa1 = 'Reactin perusteet'
  const tehtavia1 = 10
  const osa2 = 'Tiedonvälitys propseilla'
  const tehtavia2 = 7
  const osa3 = 'Komponenttien tila'
  const tehtavia3 = 14

  return (
    <div>
      <Otsikko otsikko={kurssi}/>
      <Sisalto osaa1={osa1} osaa2={osa2} osaa3={osa3} tehtaviaa1={tehtavia1} tehtaviaa2={tehtavia2} tehtaviaa3={tehtavia3}/>
      <Yhteensa tehtavat={tehtavia1 + tehtavia2 + tehtavia3}/>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
