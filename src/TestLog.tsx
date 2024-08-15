import React from 'react'

console.log('1/3. Before component')
const TestLog: React.FC = () => {
  console.log('2/3. Inside component')
  return (
    <div style={{ gridColumn: '1/-1' }}>
      Testing: Console should have 3x logs
    </div>
  )
}
console.log('3/3. After component')

export default TestLog
