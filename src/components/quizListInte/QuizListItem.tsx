import React from 'react'

import "./_quizItem.scss"

const QuizListItem = () => {
  return (
    <li className="item">
        <h2 className="item__title">Title</h2>
        <p className="item__descr">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        <p className="item__count">Questions: <span>10</span></p>
    </li>
  )
}

export default QuizListItem