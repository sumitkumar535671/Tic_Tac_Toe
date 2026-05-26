import useTicTacToe from '../hooks/use-tic-tac-toe.jsx';
import "../App.css"

function TicTacToe() {
  const {board,resetGame,getStatusMessage,handleClick} = useTicTacToe()
  
  return (
    <div className='game'>
      <div className="status">
        <span>{getStatusMessage()}</span>
        <button className='reset-button' onClick={resetGame}>Reset Game</button>
      </div>
      <div className="board">
        {
          board.map((b,index) => {
                //Dynamically assign classes based on the cell value
                let cellClass = 'cell'
                if(b==="X") cellClass += " x-cell";
                if(b==="O") cellClass += " o-cell"
            return (
              <button className={cellClass} key={index} onClick={()=>handleClick(index)} 
                disabled = {b !== null}
              >{b}</button>
            )
          })
        }
      </div>
    </div>
  )
}

export default TicTacToe
