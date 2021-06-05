import type { NextApiRequest, NextApiResponse } from 'next'
import Stripe from 'stripe'

const stripe = new Stripe(`${process.env.SERVER_KEY}`, { apiVersion: '2020-08-27' })

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const prices = await stripe.prices.list({})

  switch (req.method) {
    case 'GET':
      res.status(200).json(prices.data)

      break
    default:
      res.status(400).end()
  }
}
