import React from 'react'
import { bookedSeats,seats as seatList } from '../util/BookSeat'

const ShowList = ({setShowList}) => {
  return (
    <>
    <div className="wrapper">
    <div className="container-fluid d-flex flex-column align-items-center justify-content-center text-center text-danger h-100">
      <div className="card bg-success">
                  <div className="card-header text-white">Seats</div>
                  <div className="card-body bg-info ">
                  {seatList.map((row,ind)=> {
                    return (
                      <div className='d-flex m-2' key={+ind}>
                        {row.map((num,indCol) => (
                          <div key={+indCol} className={`seat ${bookedSeats.has(num)?'booked':''}`}>{num}</div>
                        ))}
                      </div>
                    
                    )
                  })}
                  
                </div>
                <button className='btn btn-primary align-content-center' onClick={()=>setShowList(false)}>&larr; Book More</button>
                  </div>
                 
   </div>
    </div>
    
      
    
    </>
  )
}

export default ShowList