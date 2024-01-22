export default function IsWinner ({
  selectedValue,
  p1score,
  p2score,
  winner,
  setWinner,
  isGameOver,
  setIsGameOver
}) {
  function result () {
    if (p1score >= selectedValue || p2score >= selectedValue) {
      setWinner(p1score >= selectedValue ? 1 : 2)
      setIsGameOver(true)
    }
  }

  result()
  if (isGameOver) {
    return (
      <>
        <h2 style={{ color: 'green' }}>Player {winner} wins!</h2>
      </>
    )
  }

  return null
}
