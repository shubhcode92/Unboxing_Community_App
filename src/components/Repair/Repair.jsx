
import React from 'react'
import Question from '../Question/Question'
import Button from '../Button/Button'

const Repair = () => {
  const repairQues = [
    "How do I update Sony A80L television’s firmware to fix issues?",
    "How do I prevent screen burn-in on OLED and plasma in Sony A80L television?",
    "How do I factory reset Sony A80L television to its default settings?",
    "Should I consult Sony A80L television manufacturer before seeking the third-party repair?",
    "How do I transfer settings and data from my old televisions to new Sony A80L television? "
  ]
  return (
    <>
      <div>
        {repairQues.map( (val, ind) => <Question q={repairQues[ind]}/> )}
        <Button />
      </div>
    </>
  )
}

export default Repair