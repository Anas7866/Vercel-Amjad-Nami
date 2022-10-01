import React from 'react'
import MiniDrawer from '../../../Shared/Navigation/Navigation.tsx'
import Dashboardview from './Dashboardview'

const Dashboardmain = () => {
  return (
    <div className='col-sm-12 p-0 ' >
    <MiniDrawer component={   <Dashboardview/>} />
    </div>
  )
}

export default Dashboardmain