import { GrPowerReset } from 'react-icons/gr'

export default function ({ updatep1, updatep2, setValue, setIsGameOver }) {
  function resetAction () {
    {
      updatep1(0)
      updatep2(0)
      setValue(5)
      setIsGameOver(false)
    }
  }
  return (
    <button
      onClick={resetAction}
      style={{ backgroundColor: '#0acb7b', marginBottom: '5px' }}
    >
      <GrPowerReset />
    </button>
  )
}
