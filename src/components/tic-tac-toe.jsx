import useTicTacToe from '../hooks/use-tic-tac-toe.jsx';
import "../App.css"

function TicTacToe() {
  const {
    board,
    resetGame,
    getStatusMessage,
    handleClick,
    calculateWinner
  } = useTicTacToe();

  const winner = calculateWinner(board);

  return (
    <div className='game-container'>

      {/* Winner Overlay */}
      {
        winner && (
          <div className="winner-overlay">
            <div className="winner-box">
              <h1>🎉 Player {winner} Wins! 🎉</h1>
              <p>Congratulations Champion 🏆</p>

              <button
                className='play-again-btn'
                onClick={resetGame}
              >
                Play Again
              </button>
            </div>
          </div>
        )
      }

      <div className='game'>
        <div className="status">
          <span>{getStatusMessage()}</span>

          <button
            className='reset-button'
            onClick={resetGame}
          >
            Reset Game
          </button>
        </div>

        <div className="board">
          {
            board.map((b,index) => {

              let cellClass = 'cell'

              if(b==="X") cellClass += " x-cell";
              if(b==="O") cellClass += " o-cell"

              return (
                <button
                  className={cellClass}
                  key={index}
                  onClick={()=>handleClick(index)}
                  disabled={b !== null}
                >
                  {b}
                </button>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default TicTacToe