import type { NextApiRequest, NextApiResponse } from 'next'
import Stripe from 'stripe'

const stripe = new Stripe(`${process.env.SERVER_KEY}`, { apiVersion: '2020-08-27' })

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const { checkout } = req.body

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: checkout,
    mode: 'payment',
    success_url: process.env.BASE_URL,
    cancel_url: process.env.BASE_URL,
  })

  switch (req.method) {
    case 'POST':
      res.status(200).json({ id: session.id })

      break
    default:
      res.status(400).end()
  }
}
