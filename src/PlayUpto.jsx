import { useState } from 'react'
import './PlayUpto.css'
export default function PlayUpto ({ selectedValue, setValue }) {
  function listenChange (event) {
    setValue(event.target.value)
  }

  return (
    <div>
      <label for='points'>Playing up to: </label>
      <select
        name='points'
        id='points'
        value={selectedValue}
        onChange={listenChange}
      >
        <option value='3'>3</option>
        <option value='5'>5</option>
        <option value='10'>10</option>
        <option value='15'>15</option>
        <option value='20'>20</option>
        <option value='30'>30</option>
      </select>
    </div>
  )
}
