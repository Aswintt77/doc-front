import React,{useEffect, useState} from 'react'
import axios from 'axios'
import {Row,Col} from 'react-bootstrap'
import Restcard from './Restcard'
import './allrest.css'
import myimage from './Medical Social Media Template Design - Made with PosterMyWall.jpg'

function Allrest() {
  const base_url='https://doc-back-wzau.onrender.com/doctors'
  //to hold array of restaurant data
  const [AllrestData,setAllRestData] = useState([])
  // Api fetching
  const fetchData=async()=>{
    const result = await axios.get(base_url)
    console.log(result.data);
    setAllRestData(result.data)
  }
  console.log(AllrestData);
  useEffect(()=>{
    fetchData()
  },[])
  return (
   
    <div className='aswin'>
      <div className=' text-center coverr p-4'>
        <img  width={'1200px'} height={'420px'} style={{borderRadius:'10px', alignItems:'center'}} src={myimage} alt="" />
      </div>
      <h1 className='text-center bg-light'>All Hospitals</h1>
      <Row>{
        AllrestData.map(item=>(
          <Col sm={12} md={6} lg={4} xl={3}>
          <Restcard doctors={item}/>
          </Col>
        ))
        }

      </Row>
    </div>
  )
}

export default Allrest