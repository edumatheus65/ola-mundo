import Banner from 'Components/Banner/Banner'
import React from 'react'
import { Outlet } from 'react-router-dom'

const DefaultPage = ({children}) => {
  
  return (
    <main>
        <Banner />

        <Outlet />
        {children}
      
    </main>
  )
}

export default DefaultPage
