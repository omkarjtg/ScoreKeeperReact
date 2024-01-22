import { FaPlus } from 'react-icons/fa6'

export default function ({ updatep1, updatep2, isGameOver }) {
  return (
    <div className='buttonDiv'>
      <button
        onClick={() => updatep1(prevScore => prevScore + 1)}
        style={{ backgroundColor: '#f24141' }}
        disabled={isGameOver}
      >
        <FaPlus />
      </button>
      {'   '}
      <button
        onClick={() => updatep2(prevScore => prevScore + 1)}
        style={{ marginLeft: '30px', backgroundColor: '#068ff8' }}
        disabled={isGameOver}
      >
        <FaPlus />
      </button>
    </div>
  )
}
