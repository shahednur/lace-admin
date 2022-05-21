import React from 'react'
import TopContainer from './TopContainer'
import MainContainer from './MainContainer'
import './Container.css'

const Container = () => {
  return (
    <div className="container">
        <TopContainer />
        <MainContainer />
    </div>
  )
}

export default Container