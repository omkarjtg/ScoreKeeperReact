import { useState } from 'react'
import Header from './Header'
import ScoreDisplay from './ScoreDisplay'
import PlayUpto from './PlayUpto'
import IncrementButtons from './IncrementButtons'
import ResetButton from './ResetButton'
import './App.css'
import IsWinner from './isWinner'

export default function App () {
  const [p1score, updatep1] = useState(0)
  const [p2score, updatep2] = useState(0)
  const [selectedValue, setValue] = useState(5)
  const [winner, setWinner] = useState(1)
  const [isGameOver, setIsGameOver] = useState(false)

  return (
    <>
      <div className='headerDiv'>
        <Header />

        <PlayUpto selectedValue={selectedValue} setValue={setValue} />

        <ScoreDisplay p1score={p1score} p2score={p2score} />

        <IncrementButtons
          updatep1={updatep1}
          updatep2={updatep2}
          isGameOver={isGameOver}
        />

        <ResetButton
          updatep1={updatep1}
          updatep2={updatep2}
          setValue={setValue}
          setIsGameOver={setIsGameOver}
        />

        <IsWinner
          selectedValue={selectedValue}
          p1score={p1score}
          p2score={p2score}
          winner={winner}
          setWinner={setWinner}
          isGameOver={isGameOver}
          setIsGameOver={setIsGameOver}
        />
      </div>
    </>
  )
}
