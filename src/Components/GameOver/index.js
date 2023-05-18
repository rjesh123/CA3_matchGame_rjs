import './index.css'

const GameOver = props => {
  const {score, playAgain} = props

  const restartGame = () => {
    playAgain()
  }

  return (
    <div className="score-card-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
        className="trophy-image"
      />
      <p className="text">Your Score</p>
      <p className="score-text">{score}</p>
      <button type="button" className="play-again-button" onClick={restartGame}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          alt="reset"
          className="play-again-img"
        />
        <p className="text">Play Again</p>
      </button>
    </div>
  )
}

export default GameOver
