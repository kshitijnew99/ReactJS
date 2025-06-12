import React, { useState } from 'react'

import Create from './components/Create'
import Show from './components/Show'

const App = () => {

  const [todo,settodo] = useState([
    // {id: 1 , title:'kaam kar bhai', isCompleted : false}
  ])

  return (
    <>
      <Create todo={todo} settodo={settodo} />
      <hr />
      <Show todo={todo} settodo={settodo}/>
    </>
  )
}

export default App