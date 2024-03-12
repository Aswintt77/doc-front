import React from 'react'


function RestReview({re}) {
   console.log(re);
  return (
    <div style={{marginBottom:'100px'}}><h4>Reviews :</h4> {
      re?.map(item=>(
       <p className="text-start"> <b>{item.patient_name}    ({item.date})    <i class="fa-solid fa-star " style={{color:'gold'}}></i>{item.rating} </b> <br />
       {item.comments}</p>
  
      ))
    }
    </div>
  )
}

export default RestReview