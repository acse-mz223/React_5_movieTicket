import { Types } from "mongoose"
import Film from "../models/film.model.js"
import Screen from "../models/screen.model.js"
import Showtime from "../models/showtime.model.js"
import Ticket from "../models/ticket.model.js"
import tmdbFetchFunc from "../service/tmdb.service.js"
import User from "../models/user.model.js"
import stripe from "../config/stripe.js"

export async function FetchRandomFilm(req, res) {
    try{
        // params
        let number = req.params.number
        console.log("Random Number:", number)
        // fetch 
        const result = await Film.aggregate([
            { $sample: { size: Number(number)} }
        ])
        // return 
        console.log("fetch random film without showtime successfully!")
        res.status(201).json({success: true, content:result}) 
    }catch(error){
        console.log("fetch random film without showtime failed:", error)
        res.status(500).json({success:false, message:"Internal server: FetchRandomFilm error"})  
    }
}

export async function FetchShowtimeByShowtimeId(req, res) {
    try{
        // get params
        const id = req.params.id
        // fetch
        const result = await Showtime.findById(id).populate("filmid", "title verticalPostURL duration").populate("bookedseat", "seat")
        // return 
        console.log("fetch showtime by showtime id successfully!")
        res.status(201).json({success: true, content:result}) 
    }catch(error){
        console.log("fetch showtime by showtime id failed:", error)
        res.status(500).json({success:false, message:"Internal server: FetchShowtimeByShowtimeId error"})  
    }
}

export async function FetchScreenByScreenNumber(req, res) {
    try{
        // get params
        const number = req.params.number
        // fetch
        const result = await Screen.findOne({screen: number}).populate("seatmap")
        // return 
        console.log("fetch screen by screen number successfully!")
        res.status(201).json({success: true, content:result}) 
    }catch(error){
        console.log("fetch screen by screen number failed:", error)
        res.status(500).json({success:false, message:"Internal server: FetchScreenByScreenNumber error"})  
    }
}

export async function FetchTrailerById(req, res) {  // return 5 trailer at most 
    try{
        // get params
        const filmid = req.params.id
        // fetch
        const result = await tmdbFetchFunc(`https://api.themoviedb.org/3/movie/${filmid}/videos`)
        // return 
        console.log("fetch trailer by id successfully!")
        res.status(201).json({success: true, content:result.results.filter((item) => item.type = "Trailer").slice(0,5)}) 
    }catch(error){
        console.log("fetch trailer by id failed:", error)
        res.status(500).json({success:false, message:"Internal server: FetchTrailerById error"})  
    }
}

export async function UpdateTicketStatus(req, res) {  
    try{
        // get params
        const {tickets, showtimeid, price} = req.body
        const seat = tickets.map((item) => item[0])
        // create ticket docs
        const ticket = new Ticket({
            showtime: new Types.ObjectId(showtimeid),
            seat: seat,
            price: price
        })
        await ticket.save()
        // fetch showtime info + update booked ticket info
        const showtime = await Showtime.findById(showtimeid)
        showtime.bookedseat.push(ticket._id)
        await showtime.save()
        // fetch user info(creat one if needed) + update booked ticket info
        const clerkid = req.auth().userId
        let userResult = await User.findOne({clerkid: clerkid})
        if (!userResult) {
            userResult = new User({
                clerkid: clerkid
            })
        }
        userResult.ticket.push(ticket._id)
        await userResult.save()

        // return 
        console.log("ticket status update in showtime + user successfully!")
        res.status(201).json({success: true}) 
    }catch(error){
        console.log("ticket status update in showtime + user failed:", error)
        res.status(500).json({success:false, message:"Internal server: UpdateTicketStatus error"})  
    }
}

export async function FetchHistoryByUserId(req, res) {  
    try{
        // get params
        const clerkid = req.auth().userId
        // fetch
        const result = await User.findOne({clerkid: clerkid}).populate({
            path: "ticket",
            select: "showtime seat price",
            populate:{
                path: "showtime",
                select: "screen date time filmid",
                populate:{
                    path: "filmid",
                    select: "title verticalPostURL horizontalPostURL"
                }
            }
        })
        // return 
        console.log("fetch history by user id successfully!")
        res.status(201).json({success: true, content:result}) 
    }catch(error){
        console.log("fetch history by user id failed:", error)
        res.status(500).json({success:false, message:"Internal server: FetchHistoryByUserId error"})  
    }
}


export async function createPaymentIntent(req, res){
    try{
        // get item
        const {seat, price} = req.body
        // create 
        const paymentIntent = await stripe.paymentIntents.create({
            amount: Math.round(Number(price)*100),
            currency: "gbp",
            automatic_payment_methods: {enabled: true}
        })  
        // return 
        console.log("payment intent createdn successfully!")
        res.status(201).json({success: true, content: paymentIntent.client_secret}) 
    }catch(error){
        console.log("payment intent created failed:", error)
        res.status(500).json({success:false, message:"Internal server: createPaymentIntent error"})        
    }
}

export async function paymentWebhook(req, res){
const sig = req.headers['stripe-signature'];
  let event;
  
  try {
    event = stripe.webhooks.constructEvent(
      req.rawBody, 
      sig, 
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }
  
  // Handle the event
  switch (event.type) {
    case 'payment_intent.succeeded':
      const paymentIntent = event.data.object;
      // Handle successful payment
      // e.g., fulfill order, send confirmation email
      break;
    case 'payment_intent.payment_failed':
      // Handle failed payment
      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }
  
  res.send();
}