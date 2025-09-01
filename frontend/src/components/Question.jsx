import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

function Question() {
  return (
    <div>
        <div className='font-medium text-xl pb-4'>FAQS</div>
        <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
            <AccordionTrigger>How do I book a movie ticket online?</AccordionTrigger>
            <AccordionContent>
                Select your desired movie, date, and showtime from our homepage. Choose your preferred seats, add them to your cart, and proceed to checkout.
            </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
            <AccordionTrigger>Can I change or cancel my booking?</AccordionTrigger>
            <AccordionContent>
                Yes. You can modify or cancel your booking up to 2 hours before the scheduled showtime. Refunds exclude service fees and depend on our refund policy.
            </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
            <AccordionTrigger>What payment methods are accepted?</AccordionTrigger>
            <AccordionContent>
                We accept major credit/debit cards, PayPal, and popular digital wallets. Gift cards can also be redeemed during checkout.
            </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
            <AccordionTrigger>Do you offer student or senior discounts?</AccordionTrigger>
            <AccordionContent>
                Yes. Discounted tickets are available for students and seniors. Please present a valid ID when entering the theater.
            </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
            <AccordionTrigger>Is the theater wheelchair accessible?</AccordionTrigger>
            <AccordionContent>
                Absolutely. All theaters include accessible seating and facilities. When booking, select the accessibility icon to choose suitable seats.
            </AccordionContent>
            </AccordionItem>
        </Accordion>
    </div>
  )
}

export default Question