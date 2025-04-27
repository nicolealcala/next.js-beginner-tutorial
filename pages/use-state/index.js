import CounterCorrect from '@/components/use-state-components/CounterCorrect'
import CounterIncorrect from '@/components/use-state-components/CounterIncorrect'
import React from 'react'

const UseState = () => {
    return (
        <div className='grid grid-cols-2 gap-12'>
            <CounterCorrect />
            <CounterIncorrect />
            <CounterCorrect isTwice />
            <CounterIncorrect isTwice />
        </div>
    )
}

export default UseState
