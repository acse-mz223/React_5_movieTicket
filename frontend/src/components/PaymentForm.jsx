import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js'
import React, { useState } from 'react'
import { Button } from './ui/button'
import toast from 'react-hot-toast'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function PaymentForm({showtimeInfo, selectedseat, price}) {
  // def
  const [loading, setLoading] = useState(false)
  const stripe = useStripe()
  const elements = useElements()
  const navigator = useNavigate()
  // submitPayment function
  async function submitPayment() {
    setLoading(true) 
    try{
        //payment
        const {error, paymentIntent} = await stripe.confirmPayment({
            elements,
            redirect: "if_required"
        })
        // fail
        if (error) {
            toast.error("Payment failed:" + error.message)
            console.log("payment failed:", error.message)
            return 
        }
        // sucessful
        console.log("payment successfully!")
        // save the book info into showtime + user
        const ticketUploadResult = await axios.post("/api/frontend/ticketupdate", {showtimeid: showtimeInfo._id ,tickets: selectedseat, price:price})
        console.log("booked seat update + user update into db successfully!")        
        // redirect to history page
        toast.success("payment successfully!")
        navigator("/history")
    } catch(error){
        toast.error("Payment failed!")
        console.log("payment failed:", error)
    }finally{
        setLoading(false)
    }
  }
  // return 
  return (
    <div className='h-[550px] overflow-y-scroll'>
        <PaymentElement/>
        <Button className="mt-5 w-full cursor-pointer" onClick={submitPayment} disabled={loading}>{loading? "LOADING...":"CHECK OUT"}</Button>
    </div>
  )
}

export default PaymentForm