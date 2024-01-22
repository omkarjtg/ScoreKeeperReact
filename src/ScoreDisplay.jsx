import { useState } from 'react'
import './ScoreDisplay.css'
export default function ({ p1score, p2score }) {
  return (
    <>
      <div>
        <h3 style={{color:'#f24141'}}> Player1: {p1score}</h3>
        {'   '}
        <h3 style={{ color: '#068ff8' , marginLeft: '30px' }}> Player2: {p2score}</h3>
      </div>
    </>
  )
}
