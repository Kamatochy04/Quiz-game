import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Header from '../header/Header'

import './app.scss'
import QuizList from '../quizList/QuizList'
import Registration from '../../pages/redistration/Registration'
import Admin from '../../pages/admin/Admin'

const App = () => {
  return (
    <>
      <Header/>
      <div className='container'>
        <Routes>
          <Route path='/' element={<QuizList/>}/>
          <Route path='/registration' element={<Registration/>}/>
          <Route path='/admin' element={<Admin/>}/>
        </Routes>
      </div>
    </>
   
  )
}

export default App