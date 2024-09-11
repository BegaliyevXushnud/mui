
import { TeacherTable } from "../../component"
import axios from "axios"
import React, { useEffect } from 'react'

const index = () => {
  useEffect(() => {
    axios.get("http://localhost:3000/teacher").then(res => {
      console.log(res);
      
    })
  })
  return (
    <>
    <div>Teacher</div>
    <TeacherTable/>
    </>
  )
}

export default index