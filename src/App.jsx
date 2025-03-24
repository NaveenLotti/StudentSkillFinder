import { useState } from 'react'
import StudentSearch from './components/StudentSearch'
import Academics from './components/academics';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Studnet Skill Finder </h1>
    <StudentSearch></StudentSearch>
    <Academics></Academics>

    </>
  )
}

export default App
