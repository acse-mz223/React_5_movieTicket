import {loadStripe} from '@stripe/stripe-js';

const  VITE_STRIPE_PUBLISHABLE_KEY = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY
const stripe = loadStripe(VITE_STRIPE_PUBLISHABLE_KEY)

export default stripe