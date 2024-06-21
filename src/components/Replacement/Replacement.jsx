
import React from 'react'
import Question from '../Question/Question'
import Button from '../Button/Button'

const Replacement = () => {
  const replaceQues = [
    "What is the warranty period for Sony A80L television?",
    "How do I initiate a replacement for Sony A80L television?",
    "What conditions qualify for a free replacement of Sony A80L television?",
    "How long does the replacement process take for Sony A80L television?",
    "Can I get a replacement for a damaged screen on Sony A80L television?"
  ];
  return (
    <>
      <div>
        {replaceQues.map( (val, ind) => <Question q={replaceQues[ind]}/> )}
        <Button />
      </div>
    </>
  )
}

export default Replacement