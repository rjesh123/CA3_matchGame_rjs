import './index.css'

const Navbar = props => {
  const {score, time} = props

  return (
    <div className="navbar-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
        className="logo-image"
      />
      <div className="time-score-container">
        <p className="score">
          score: <span className="score-count">{score}</span>
        </p>
        <div className="time-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer-image"
          />
          <p className="time-count">{time} sec</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar
