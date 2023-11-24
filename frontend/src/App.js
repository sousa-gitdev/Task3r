import logo from './logo.svg';
import './App.css';
import Header from './components/Header/header';
import DraggableButton from './components/DraggableButton/DraggableButton';
import { useState } from 'react';
import Board from './components/Board/board';

function App() {

  const [boards, setBoards] = useState([]); 

  const addBoard = (boardInfo) => {
      console.log(boardInfo);
      setBoards([...boards, boardInfo]);
  };

  const clearBoards = () => {
    setBoards([]);
  }
  return (
    <div className='App'>
      <Header onClearBoards={clearBoards}/>
      <div className='content'>
        {boards.map((board,index) => (
          
          <Board key={index} board={board}></Board>

        ))}

      </div>
      <DraggableButton onBoardSave={addBoard}/>

    </div>
   
      
  );
}

export default App;
