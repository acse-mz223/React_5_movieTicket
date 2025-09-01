import Stripe from "stripe";
import { STRIPE_SECRET_KEY } from "./envVars.js";

const stripe = new Stripe(STRIPE_SECRET_KEY,{
    apiVersion: '2025-03-31.basil'
})

export default stripe