import { useState } from 'react'
import StudentSearch from './components/StudentSearch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Studnet Skill Finder </h1>
    <StudentSearch></StudentSearch>      
    </>
  )
}

export default App
