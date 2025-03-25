import { useState } from 'react'
import StudentSearch from './components/StudentSearch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <StudentSearch />
    </>
  )
}

export default App
