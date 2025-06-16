import React, { createContext } from 'react'

import { useState } from 'react'

export const todocontext = createContext(null)

const Wrapper = (props) => {
    const [todo,settodo] = useState([
        // {id: 1 , title:'kaam kar bhai', isCompleted : false}
    ])

    return <todocontext.Provider value={[todo,settodo]}>
                {props.children}
            </todocontext.Provider>
}

export default Wrapper