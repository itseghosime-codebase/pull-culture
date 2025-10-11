import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function Faq() {

    const GeneralQuestions = [
        {
            question: 'How does the Marketplace work?',
            answer: 'You can trade existing cards in your inventory for anything listed in the marketplace! Typical processing times for marketplace transactions is between 3-10 business days!'
        }
    ]

    const ShippingQuestions = [
        {
            question: 'How long does shipping take?',
            answer: 'Shipping and delivery of cards takes about 2-4 weeks from withdrawal, and we’re constantly working to improve ship times and processes. Orders with high demand items can take up to 5 weeks to ship. All cards come double sleeved, in a top loader, inside a bubble mailer. Marketplace orders are processed differently and ship within 3-10 business days. Check out our shipping page for full information on our shipping & refund policies and current shipping times.'
        }
    ]

    return (
        <div className='space-y-4'>
            <div className='text-center font-black'>
                <h3 className='text-2xl md:text-4xl xl:text-6xl'>FAQ</h3>
                <h5 className='md:text-lg lg:text-xl xl:text-2xl'>GENERAL QUESTIONS</h5>
            </div>
            <div>
                <Accordion
                    type="single"
                    collapsible
                    className="w-full space-y-2"
                    defaultValue="item-1"
                >
                    {GeneralQuestions.map(({ question, answer }, i) => (
                        <AccordionItem key={i} value={`item-${i + 1}`} className='border-0'>
                            <AccordionTrigger className='bg-card font-semibold md:text-lg px-4 text-brand py-2 rounded-lg'>{question}</AccordionTrigger>
                            <AccordionContent>
                                <p className='bg-card font-semibold md:text-lg px-4 py-2 rounded-lg mt-1 mb-2'>
                                    {answer}
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>

            <div className='text-center font-black'>
                <h5 className='md:text-lg lg:text-xl xl:text-2xl'>SHIPPING QUESTIONS</h5>
            </div>
            <div>
                <Accordion
                    type="single"
                    collapsible
                    className="w-full space-y-2"
                    defaultValue="item-1"
                >
                    {ShippingQuestions.map(({ question, answer }, i) => (
                        <AccordionItem key={i} value={`item-${i + 1}`} className='border-0'>
                            <AccordionTrigger className='bg-card font-semibold md:text-lg px-4 text-brand py-2 rounded-lg'>{question}</AccordionTrigger>
                            <AccordionContent>
                                <p className='bg-card font-semibold md:text-lg px-4 py-2 rounded-lg mt-1 mb-2'>
                                    {answer}
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>

        </div>
    )
}
