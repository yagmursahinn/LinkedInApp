import React from 'react'
import {Space, Spin} from "antd"


export default function Loader() {
  return (
    <div className='Loader'>
        <p>Loading..Please Wait..</p>
        <Space size="middle"/>
      <Spin size="large"/>
    </div>
  )
}
