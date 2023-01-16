import React, { useState } from 'react'
import bookSeats from '../util/BookSeat';
import {bookedSeats} from '../util/BookSeat';


const BookForm = ({setShowList}) => {
  const availableSeats = 80 - bookedSeats.size;
  const[state,setState]=useState({
    name:"",
    seats:""
    
  })
  const[error,setError]=useState("");
   const handleSubmit =()=> {
    if(!state.seats) return setError('please enter number of seats'); 
    if(state.seats < 0 && state.seats <=7) return setError('seat number can not be negative or less than 8');
    if(state.seats>=8) return setError('seat cannot booked above 7');
    if(state.seats>availableSeats) return setError('value exceeds availbale seats');
    let x = bookSeats(Number(state.seats));
    console.log(x);
    
    setShowList(true)
    setState.error('');
  }
 const OnInputChange=(e)=>{
  setState({
    ...state,
    [e.target.name]:e.target.value
  });
 }
  return (
    <>
    <div className="landing">
      <div className="container d-flex flex-column align-items-center justify-content-center text-center  h-100 ">
      <div className="col-sm-6 ">
            <div className="card shadow-lg text-danger mb-2">
               <div className="card-header bg-success text-white">
                 <h1>Book Online Tickets</h1>
                </div>
               <div className="card-body d-flex flex-column bg-warning align-items-center justify-content-center">
                 <div className="col-sm-6">
                    <form>
                        <p className='h4'>Enter Your Name</p>
                        <input className='form-control'type="text" value={state.name}
                        name={'name'} onChange={e=>OnInputChange(e)} placeholder="Enter Your Name" />
                        <br/>
                        <p className='h4'>Enter Number of Seats</p>
                        <input className='form-control'  name={'seats'} type="number" value={state.seats} 
                        onChange={e=>OnInputChange(e)} placeholder="Enter Number of Seats" min='0'/>
                        <br />
                        <small>{error}</small>
                        <br />
                        <p >Available Seats : {availableSeats}</p>
                        <br />
                        <button className='btn btn-success' onClick={handleSubmit}>Book Ticket &nbsp;&rarr;</button>
                        </form>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
    
    
      </>
  )
}

export default BookForm