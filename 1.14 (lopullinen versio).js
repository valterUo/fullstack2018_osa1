import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0,
      votes: [0,0,0,0,0,0]
    }
  }

  render() {
    var i = this.state.votes.indexOf(Math.max.apply(null, this.state.votes))
    return (
      <div>
        {this.props.anecdotes[this.state.selected]}
        <p>has {this.state.votes[this.state.selected]} votes</p>
        <p>
        <button onClick={this.voteforanecdote.bind(this)}>
            Vote
        </button>
        <button onClick={this.randomNumber.bind(this)}>
            Next anecdote
        </button></p>
        <p>Anecdote with most votes:</p>
        {this.props.anecdotes[i]}
        <p>has {this.state.votes[i]} votes</p>
      </div>
    )
  }

  randomNumber = () => {
    this.setState({selected: Math.floor(Math.random() * 6)})
    renderoi()
}

voteforanecdote = () => {
    const array = this.state.votes
    array[this.state.selected] = array[this.state.selected] + 1
    this.setState({votes: array})
}

}

const renderoi = () => {
    ReactDOM.render(
        <App anecdotes={anecdotes} />,
        document.getElementById('root')
      )
  }

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)