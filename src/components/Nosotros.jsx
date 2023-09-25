import React from 'react'
import { useParams } from 'react-router-dom'
import Nav from './Nav'


export default function Nosotros() {

    // const data = useParams()
    const {letra} = useParams()
  return (
    <div>
        <Nav/>
        <h1>Nosotros</h1>
        {letra}
        {/* {data.letra} */}
    </div>
  )
}

