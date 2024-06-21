import React from 'react'
import Question from '../Question/Question'
import Button from '../Button/Button'

const Safety = () => {
  const safetyQues = [
    "What are the safety precautions for mounting Sony A80L television?",
    "How do I safely clean and maintain my Sony A80L television?",
    "What are the energy-saving modes available in Sony A80L television?",
    "How to handle Sony A80L television during a power surge?",
    "What are the safety measures for using remote controls with Sony A80L television?"
  ];
  return (
    <>
      <div>
        {safetyQues.map( (val, ind) => <Question q={safetyQues[ind]}/> )}
        <Button />
      </div>
    </>
  )
}

export default Safety