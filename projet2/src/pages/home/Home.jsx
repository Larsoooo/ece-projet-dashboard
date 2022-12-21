import React from 'react'
import Featured from '../../components/featured/Featured'
import Widget from '../../components/widget/Widget'
import './home.css'


export default function Home() {
  return (
    <div className='home'>
      <Featured />
      <Widget />
    </div>
  )
}
