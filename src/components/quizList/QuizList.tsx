import React from 'react'

import QuizListItem from '../quizListInte/QuizListItem'

import "./_quizList.scss"

const QuizList = () => {
  return (
    <div className='quizlist'>
        <QuizListItem/>
        <QuizListItem/>
        <QuizListItem/>
    </div>
  )
}

export default QuizList