import React from 'react'
import Details from './components/Details'
import StudentDetails from './components/StudentDetails'
import PastEvents from './components/PastEvents'

const Dashboard = () => {
  return (
    <>
        <Details />
        <PastEvents />
        <StudentDetails />
    </>
  )
}

export default Dashboard